// Modules
const Path = require('path')
const Webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const TARGET = process.env.NODE_ENV
const settings = require('./settings')

// Define paths
const PATHS = {
    src: Path.resolve(__dirname, '../src'),
    public: Path.resolve(__dirname, '../public'),
    build: Path.resolve(__dirname, '../dist'),
    modules: Path.resolve(__dirname, '../node_modules'),
    root: Path.resolve(__dirname, '..')
}

const common = {
    entry: [Path.resolve(PATHS.src, 'index.js')],

    output: {
        path: PATHS.build,
        publicPath: settings.build.publicPath,
        filename: `${settings.build.mainBundleName}.bundle.[chunkhash].js`,
        chunkFilename: '[name].bundle.[chunkhash].js'
    },

    target: 'web',

    resolve: {
        modules: [PATHS.modules],
        extensions: ['.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: Path.resolve(PATHS.public, 'index.ejs'),
            htmlTheme: settings.html.theme,
            title: settings.html.title
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: `${PATHS.public}`,
                globOptions: {
                    ignore: ['index.ejs']
                }
            }]
        })
    ]
}

// When in development mode
if (TARGET === 'development' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'cheap-module-source-map',

        mode: 'development',

        devServer: {
            static: {
                directory: PATHS.build
            },
            port: 3000,
            historyApiFallback: true,
            hot: true,
            proxy: [
                {
                    context: settings.proxy.paths,
                    target:
                        process.env.PROXY_ENV === 'staging'
                            ? settings.proxy.stagingEnvUrl
                            : `http://localhost:${settings.proxy.port}`,
                    secure: false
                }
            ]
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [PATHS.src],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                ['@babel/env', {
                                    targets: {
                                        browsers: settings.build.supportedBrowsers
                                    }
                                }],
                                ['@babel/preset-react', {
                                    runtime: 'automatic'
                                }]
                            ],
                            plugins: [
                                'transform-mui-imports',
                                'react-refresh/babel'
                            ]
                        }
                    }]
                }
            ]
        },

        plugins: [
            new Webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new ReactRefreshWebpackPlugin()
        ]
    })
}

// When in production mode
if (TARGET === 'production') {
    module.exports = merge(common, {
        mode: 'production',

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [PATHS.src],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/env', {
                                    targets: {
                                        browsers: settings.build.supportedBrowsers
                                    },
                                    modules: false
                                }],
                                ['@babel/preset-react', {
                                    runtime: 'automatic'
                                }]
                            ],
                            plugins: [
                                'transform-mui-imports'
                            ]
                        }
                    }]
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new Webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new Webpack.LoaderOptionsPlugin({ minimize: true }),
            new Webpack.optimize.AggressiveMergingPlugin()
        ]
    })
}

// Modules
const Path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const TARGET = process.env.NODE_ENV
const settings = require('./settings')

// Define paths
const PATHS = {
    src: Path.resolve(__dirname, '../src'),
    public: Path.resolve(__dirname, '../public'),
    build: Path.resolve(__dirname, '../build'),
    modules: Path.resolve(__dirname, '../node_modules'),
    root: Path.resolve(__dirname, '..')
}

const common = {
    entry: [Path.resolve(PATHS.src, 'index.js')],

    output: {
        path: PATHS.build,
        publicPath: settings.build.publicPath,
        filename: `${settings.build.mainBundleName}.bundle.[hash].js`,
        chunkFilename: '[name].bundle.[chunkhash].js'
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendors: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: new RegExp(`[\\\\/](${settings.build.vendorLibs})[\\\\/]`),
                    priority: -10
                }
            }
        }
    },

    target: 'web',

    resolve: {
        modules: [PATHS.modules],
        extensions: ['.js']
    },

    plugins: [
        new HtmlWebpackPLugin({
            template: Path.resolve(PATHS.public, 'index.ejs'),
            htmlTheme: settings.html.theme,
            title: settings.html.title
        }),
        new CopyWebpackPlugin([{
            from: `${PATHS.public}`,
            ignore: ['index.ejs']
        }])
    ]
}

// When in development mode
if (TARGET === 'development' || !TARGET) {
    module.exports = merge.smart(common, {
        devtool: 'cheap-module-source-map',

        mode: 'development',

        devServer: {
            contentBase: PATHS.build,
            port: 3000,
            historyApiFallback: true,
            hot: true,
            proxy: [{
                context: settings.proxy.paths,
                target: `http://localhost:${settings.proxy.port}`
            }]
        },

        entry: {
            app: [
                Path.resolve(PATHS.src, 'index.js')
            ]
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [PATHS.src],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', {
                                    targets: {
                                        browsers: settings.build.supportedBrowsers
                                    },
                                    modules: false
                                }],
                                'react',
                                'stage-3'
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                                ['transform-class-properties', { spec: true }],
                                ['transform-es2015-classes', { loose: true }],
                                ['syntax-dynamic-import']
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
            new Webpack.NamedModulesPlugin(),
            new Webpack.HotModuleReplacementPlugin()
        ]
    })
}

// When building for staging
if (TARGET === 'staging') {
    module.exports = merge.smart(common, {
        devtool: 'source-map',

        mode: 'development',

        entry: {
            app: [
                Path.resolve(PATHS.src, 'index.js')
            ]
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [PATHS.src],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', {
                                    targets: {
                                        browsers: settings.build.supportedBrowsers
                                    },
                                    modules: false
                                }],
                                'react',
                                'stage-3'
                            ],
                            plugins: [
                                'react-hot-loader/babel',
                                ['transform-class-properties', { spec: true }],
                                ['transform-es2015-classes', { loose: true }],
                                ['syntax-dynamic-import']
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
            new Webpack.NamedModulesPlugin(),
            new Webpack.HotModuleReplacementPlugin()
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
                                ['env', {
                                    targets: {
                                        browsers: settings.build.supportedBrowsers
                                    },
                                    modules: false
                                }],
                                'react',
                                'stage-3'
                            ],
                            plugins: [
                                ['transform-class-properties', { spec: true }],
                                ['syntax-dynamic-import']
                            ]
                        }
                    }]
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(PATHS.build, {root: PATHS.root}),
            new Webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new Webpack.LoaderOptionsPlugin({minimize: true}),
            new Webpack.optimize.ModuleConcatenationPlugin(),
            new MinifyPlugin({}, {
                comments: false
            }),
            new Webpack.optimize.AggressiveMergingPlugin()
        ]
    })
}

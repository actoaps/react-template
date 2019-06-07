module.exports = {
    html: {
        theme: '#6F00FF',
        title: 'React Project Template'
    },
    build: {
        publicPath: '/',
        supportedBrowsers: ['last 1 Chrome versions'], // https://github.com/browserslist/browserslist
        mainBundleName: 'projectTemplate',
        vendorLibs: 'react|react-dom|@material-ui/core' // separated by pipes
    },
    proxy: {
        paths: ['/api', '/google', '/economic'],
        port: 8080
    }
}

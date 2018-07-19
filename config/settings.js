module.exports = {
    html: {
        theme: '#6F00FF',
        title: 'React Project Template'
    },
    build: {
        publicPath: '/',
        supportedBrowsers: ['last 1 Chrome versions'], // https://github.com/browserslist/browserslist
        mainBundleName: 'projectTemplate',
        vendorLibs: 'react|react-dom' // separated by pipes
    },
    proxy: {
        apiPath: '/api',
        apiPort: 8080
    }
}

const { createProxyMiddleware } = require('http-proxy-middleward');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8003',
            changeOrigin: true,
        })
    );
};

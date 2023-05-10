const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://youtube-clone-api224.onrender.com/api',
      changeOrigin: true,
    })
  );
};
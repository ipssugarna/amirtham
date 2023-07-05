const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://amrithamsrilankaa.onrender.com/',
      changeOrigin: true,
    })
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://college-erp-client-master.vercel.app/', // specify the API route you want to proxy
    createProxyMiddleware({
      target: 'https://college-erp-server.vercel.app', // replace with your API server's URL
      changeOrigin: true,
    })
  );
};

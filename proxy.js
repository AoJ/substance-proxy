var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
  router: {
    'letterpress.substance.io': '127.0.0.1:4004',
    'substance.io': '127.0.0.1:3003',
    'composer.substance.io': 127.0.0.1:5005
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);

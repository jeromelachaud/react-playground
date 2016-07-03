var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = config.localserver.port;
var hostname = config.localserver.hostname;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, hostname, function (err, result) {
  if (err) {
    return console.log(err);
  }
});

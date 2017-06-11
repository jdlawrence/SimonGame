var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const PORT = process.env.PORT || 5040;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    return console.log('888888', err);
  }

  console.log('Listening at http://localhost:5040/');
});
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

module.exports = (PORT) => {
  console.log('webpack server');
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '**': {
        target: `http://localhost:${PORT - 1}`,
        secure: false,
      }
    }
  }).listen(PORT, 'localhost', function (err, result) {
    if (err) {
      return console.log('888888', err);
    }

    console.log(`Listening at http://localhost:${PORT}/`);
  });
}
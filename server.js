const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const PORT = process.env.PORT || 5040;
const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();

console.log('serrrvvvverrrrr', app.get('env'));
if (isDeveloping) {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(PORT, 'localhost', function (err, result) {
    if (err) {
      return console.log('888888', err);
    }

    console.log(`Listening at http://localhost:${PORT}/`);
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
  })
}
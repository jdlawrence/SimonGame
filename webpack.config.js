var path = require('path');
const webpack = require('webpack');
const PORT = process.env.PORT || 5040;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',

  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

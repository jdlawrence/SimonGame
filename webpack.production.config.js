var path = require('path');
var webpack = require('webpack');
const PORT = process.env.PORT || 5040;

module.exports = {
  devtool: 'source',

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

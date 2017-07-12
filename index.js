const webpackServer = require('./servers/webpack-server');
const apiServer = require('./servers/api-server');
const PORT = process.env.PORT || 5040;
const PROD = process.env.NODE_ENV === 'production';

console.log('main server');
if (PROD) {
  apiServer(PORT);
} else {
  apiServer(PORT - 1);
  webpackServer(PORT); 
}

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5040;

module.exports = (PORT) => {
  const app = express();
  console.log('api server', app.get('env'), __dirname);
  app.use(express.static(__dirname + '/../dist'));
  app.get('/api', (req, res) => {
    res.send('hello');
  });
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
  });
}
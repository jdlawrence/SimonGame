const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5040;
const mockData = require('../data/mock.json');
const bodyParser = require('body-parser');

module.exports = (PORT) => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  console.log('api server', app.get('env'), __dirname);
  app.use(express.static(__dirname + '/../dist'));

  app.get('/api', (req, res) => {
    res.send(mockData);
  });

  app.post('/api', (req, res) => {
    mockData.push(req.body);
    console.log('body', req.body, mockData);
    res.send(mockData);
  })

  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
  });
}
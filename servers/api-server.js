const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5040;
const mockData = require('../data/mock.json');
const bodyParser = require('body-parser');
const Router = require('express-promise-router');
const db = require('../db');

module.exports = (PORT) => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  console.log('api server', app.get('env'), __dirname);
  app.use(express.static(__dirname + '/../dist'));

  app.get('/api', async (req, res) => {
    const {rows} = await db.query('SELECT * FROM scores');
    console.log('rows', rows);
    res.send(rows);
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
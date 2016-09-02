var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(compression());

// serve our static stuff like index.html
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html 
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var PORT = process.env.PORT || 5040;
app.listen(PORT, function() {
  console.log('Server running at localhost:' + PORT);
});
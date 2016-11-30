var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'public')));


app.listen(3000, function () {
  console.log('express listening on port 3000');
});

module.exports = app;

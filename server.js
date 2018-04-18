const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.use(function(req, res, next) {
  res.sendFile(__dirname + '/dist/index.html');
});



app.listen(3000);
console.log('The magic happens on port ' + 3000);

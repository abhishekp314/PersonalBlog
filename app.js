var express = require('express');
var app = express();

// public static data
app.use(express.static('public'));

// view engine
app.set('views', './views');
app.set('view engine', 'pug');

// public functions
app.get('/', function(req, res) {
  res.render('index')});

// port listening on 
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
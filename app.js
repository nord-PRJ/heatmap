var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));
console.log(staticPath);
app.listen(3000, function() {
  console.log('listening');
});

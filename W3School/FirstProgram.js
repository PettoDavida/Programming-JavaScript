var http = require('http');
var dt = require('./FirstModule');

http.createServer(function (req, res) {
  res.write(dt.myDateTime());
  res.end();
}).listen(8080); 
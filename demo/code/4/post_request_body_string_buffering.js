var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
  switch (req.method) {
    case 'GET':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function(chunk){
        item += chunk;
      });
      req.on('end', function(){
        items.push(item);
        res.end('OK\n');
      });
      items.forEach(function(item, i) {
        res.write(i + ' ' + item);
      });
      res.end();
      break;
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      req.on('data', function(chunk){
        item += chunk;
      });
      req.on('end', function(){
        items.push(item);
        res.end('OK\n');
      });
      break;
  }
});

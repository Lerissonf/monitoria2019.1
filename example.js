var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
<<<<<<< HEAD
  res.end('Hello Lucas!');
=======
  res.end('Hello Lerisson!');
>>>>>>> da02aac5383ddea3e047c3a2e841942a097117c8
}).listen(8080);


/* Load the HTTP library */
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.write('this is Carlos first server');
  response.end();
})
.listen(8888);
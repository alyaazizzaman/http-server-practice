//get the core module and assign to http
var http = require('http');

//create and http server, and every time it receives a request
//it invokes the callback funciton
var server = http.createServer(function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Internet');
});

//start the server on port 9001
//with a hostname of local hostname
//when the server starts invoke the callback functoon
server.listen(9001, 'localhost', function(){
  console.log('running on localhost:9001');
});

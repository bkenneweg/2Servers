var http = require('http');
var PORT=7000
var PORT2=7500

function handleRequest (request, response){
	response.end('Hello Handsome!' + request.url);
}

function handleRequest2(request, response){
	response.end('You Suck!' + request.url);
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function(){
	console.log("You are awesome Server listening on http://localhost:%s", PORT);
});
server2.listen(PORT2, function(){
	console.log("You are ugly and I hate you! Server listening on http://localhost:%s", PORT2)

});

var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log('request for url ' + pathname + ' received');
		route(pathname);

		console.log('request received');
		response.writeHead(600, {"content-Type": "text/plain"});
		response.write("Hello World");
		response.end();

	}


http.createServer(onRequest).listen(8888);
console.log('server has started...');
}
module.exports.start = start;


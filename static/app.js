const http = require('http'); // http module
const fs = require('fs');    // file system module

http.createServer((req, res)=> {
	const readStream = fs.createReadStream('./Animesh.html', 'utf8');
	res.writeHead(200, {'content-type':'text/html'}); // telling server what kind of file i may send
	readStream.pipe(res);  // making a pipeline with server and clinet and can make transaction

}).listen(3000);  //port to listen server

console.log('Server has started');
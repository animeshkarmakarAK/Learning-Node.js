var net = require('net');

var chatServer = net.createServer();

 chatServer.on('connection', function(client){
 	console.log('is this working');
	client.write('Hi\n');
	client.write('Bye\n');


	client.end();
}).listen(8888);
console.log('Chat Server has started...');
chatServer.emit('connection');
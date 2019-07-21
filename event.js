const eventsEmitter = require('events');
const eventEmitter = new eventsEmitter();

eventEmitter.on('tutorial', function(num1, num2){
	console.log(num1 + num2);
})

eventEmitter.emit('tutorial', 1, 3);
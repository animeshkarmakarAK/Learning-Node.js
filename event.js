const eventsEmitter = require('events');
const eventEmitter = new eventsEmitter();

eventEmitter.on('tutorial', ()=>{
	console.log('Thie is the event emitter');
})

eventEmitter.emit('tutorial');
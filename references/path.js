const path = require('path');

//Base file name 
console.log(path.basename(__filename));

// Directory name 
console.log(path.dirname(__filename));

// file Extension name 

console.log(path.extname(__filename));

//we can do above stuff like this, but we are using much more to use path module//
// we can disecting more by using 'path' module//
console.log(__filename);
console.log(__dirname);

//create path object
console.log(path.parse(__filename));

// to access the base name of this dir using object , and to use object need 'parse()' function 
console.log(path.parse(__filename).base);
console.log(path.parse(__dirname).base);  //return base directory

//concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));

const os = require('os');
console.log('Operation system platform: ' + os.platform);
console.log('os architecture: '+ os.arch())
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());


const Eventemitter = require('events');
const myEmitter = new Eventemitter();

myEmitter.on('event', () => console.log('Emitter fired...'));

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

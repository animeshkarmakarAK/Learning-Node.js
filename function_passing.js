function sayHello(value) {
	console.log(value);
}

function execute( someFunction, value) {
	someFunction(value);	
}

execute(sayHello,"Hello");
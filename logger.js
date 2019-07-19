console.log(__filename);
console.log(__dirname);
var http = "http://animeshKarmakarlogger.io/io";

function log(message) {
	console.log(message);
}

module.exports.log = log; // to make something public which we can export from outside 

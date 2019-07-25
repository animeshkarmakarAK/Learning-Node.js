const url = require('url');
const myUrl = new URL('http://mywebsite.com:8888/hello.html?id=12&status=active');

//href 
console.log(myUrl.href);
console.log(myUrl.href.toString());

//host 
console.log(myUrl.host);

//hostname (does not get port)
console.log(myUrl.hostname);

//serialized query 
console.log(myUrl.search);

//search parameters
console.log(myUrl.searchParams);

//add params
console.log(myUrl.searchParams.append('abc', 123));
console.log(myUrl.searchParams);

//loop through the search params 
myUrl.searchParams.forEach((value, name) => console.log(name + ': ' + value ));

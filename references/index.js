const http = require('http'); // http module
const fs = require('fs');    // file system module
const path = require('path');
const myUrl = require('url');

http.createServer((req, res)=> {

//     //checking requested url 
//     if(req.url === '/'){
//         //read file 
// 	fs.readFile(path.join(path.parse(__dirname).dir,'references/public', 'home.html'), (err, content) => {
// 		if(err) 
// 		console.log(err);
// 		res.writeHead(200, {'content-type':'text/html'}); 
// 		//res.write(content);
// 		res.end(content);
//     })

// }
// // for about page 
//     if(req.url === '/about'){
//         fs.readFile(path.join(path.parse(__dirname).dir,'references/public', 'about.html'), (err, content) => {
//             if(err) 
//             console.log(err);
//             res.writeHead(200, {'content-type':'text/html'}); 
//             //res.write(content);
//             res.end(content);
//         })
//     }

	// const readStream = fs.createReadStream('./Animesh.html', 'utf8');
	// res.writeHead(200, {'content-type':'text/html'}); // telling server what kind of file i may send
    // readStream.pipe(res);  // making a pipeline with server and clinet and can make transaction
    
    let filePath = path.join(__dirname, 'public', req.url === '/'?'home.html' : req.url);

    //extension of the file 
    let extname = path.extname(filePath);
 

    //content type 
    let contentType = 'text/html';

    switch(extname){
        case '.js' : 
            contentType = 'text/javascript';
            break;

        case '.css': 
            contentType = 'text/css';
            break;

        case '.json': 
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'image/png';
            break;

            case '.jpg':
                contentType = 'image/jpg';
                break;
    }

    fs.readFile(filePath, (err, content) => {
        if(err) {
            // not found page 
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if(err) throw err;
                    res.writeHead(200, {'content-type' : 'text/html'});
                    res.end(content, 'uff8');
                })
            }else {
                // some server error 
                res.writeHead(500);
                res.end('Server error with ERROR CODE : ' + err.code);
            }
        }else {
            //success 
            res.writeHead(200, {'content-type' : contentType});
            res.end(content, 'utf8');

        }
    })
    


}).listen(3000);  //port to listen server

const PORT = process.env.PORT || 3000;

console.log('Server running on port : ' + PORT);

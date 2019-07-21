fs = require('fs');

fs.writeFile('example.txt', 'This is an example file', (err)=>{
	if(err)
		console.log('Error occured to write file');
	else{
		console.log('File created successfully');

		fs.readFile('example.txt','UTF-8', (err, file)=>{
			if(err)
				console.log('Error occured to read file');
			else 
				console.log('file output : ' + file);
		})
	}
});
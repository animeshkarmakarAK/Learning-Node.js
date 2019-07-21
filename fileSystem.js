// Cearting, Reading, Writing, Appending in file 
fs = require('fs');

fs.writeFile('example.txt', 'This is an example file', (err)=>{
	if(err)
		console.log(err);
	else{
		console.log('File created successfully');

		fs.readFile('example.txt','UTF-8', (err, file)=>{
			if(err)
				console.log(err);
			else 
				console.log('file output : ' + file);
		})
	}
});

// fs.rename('example.txt', 'Animesh.txt', (err)=>{
// 	if(err)
// 		console.log(err);
// 	else 
// 		console.log('file renamed successfully');
// });


fs.appendFile('Animesh.txt', '\nsome data being appended', (err)=>{
	if(err)
		console.log(err);
	else 
		console.log('\n Data appended successfully\n');

})

//delete created file

fs.unlink('Animesh.txt', (err)=>{
	if(err)
		console.log(err);
	else
		console.log('file deleted successfully');
 
})
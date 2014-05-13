var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res){
	res.writeHeader(200,{'Content-Type':'text/plain'});	//http code 200 for successful connection and response.
	var fStream = fs.createReadStream(process.argv[3]);	//create Stream object with designated url for .txt file
	fStream.pipe(res);												//Pipe the file stream to the res variable
});
server.listen(process.argv[2]);	//obviously require some listening.

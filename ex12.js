/*
	This exercise asks to use some other module in order to deal with the stream,
	but I like the through module. No reason other than me using it in another list 
	of challenges. 
*/
var http = require('http');
var through = require('through'); //Takes two functions, write and end.
//write takes a buffer argument, which i write to a stream, and end writes null to end.
var server = http.createServer( function (req, res){
	if(req.method === 'POST'){
		var tr = through(function (buf){
			this.queue(buf.toString().toUpperCase());
		}, function(){
			this.queue(null);
		});
		res.writeHeader(200, {'content-type':'plain/text'});	//dealing with HTTP stuff
		req.pipe(tr).pipe(res);	//pipe request through transform function through to response.
	}	
});
server.listen(process.argv[2]);

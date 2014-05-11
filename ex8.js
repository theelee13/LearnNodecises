var data = "";
var http = require('http');
http.get(process.argv[2], function (res){
	res.setEncoding('utf8');
	res.on('data',function (d2){
		data+=d2;	//adds each piece of data sent to the data string.
	});
	res.on('end',function(){
		console.log(data.length);	//assignment asks for length of data
		console.log(data);			//print all data sent through get.
	});
});

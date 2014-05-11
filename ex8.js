var data = "";
var http = require('http');
http.get(process.argv[2], function (res){
	res.setEncoding('utf8');
	res.on('data',function (d2){
		data+=d2;
	});
	res.on('end',function(){
		console.log(data.length);
		console.log(data);
	});
});

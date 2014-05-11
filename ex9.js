var http = require('http');
var count = 0;
var data = []; //array for 3 pieces of data
for(var j = 0;j<3;j++){
	helper(j,process.argv[j+2]);
}
function helper (i,url){
	http.get(url, function (res){
		res.setEncoding('utf8');
		var string = "";
		res.on('data', function (datum){
			string+=datum;
		});
		res.on('end', function(){
			data[i]=string;
			count++;
			if(count>=3){
				for(var j=0;j<3;j++){
					console.log(data[j]);
				}
			}			
		});
	});
}

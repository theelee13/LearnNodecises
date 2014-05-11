var getls = require('./ex6_module.js');
getls(process.argv[2],process.argv[3], function(err,list){
	if(err)
		return console.error("Error",err);
	for(var i =0;i<list.length;i++){
		console.log(list[i]);
	}
});

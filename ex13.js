//Oh man, the semicolons. I use them to be safe. Priorities.
var http = require('http');
var url = require('url');
var server = http.createServer( function (req,res){
	if(req.method==='GET'){		//only respond to GET calls.
		var reqUrl = url.parse(req.url,true);		//coerce the url out of the stream.
		var date = new Date((reqUrl.query['iso']));	//get the date from the query string in ISO form.
		if(reqUrl.pathname==="/api/unixtime"){	//unix return
			res.writeHeader(200,{'content-type':'application/json'});
			var timef = {"unixtime":date.getTime()};
			res.write(JSON.stringify(timef));
			res.end();
		}
		else if(reqUrl.pathname==="/api/parsetime"){		//ISO JSON return
			res.writeHeader(200,{'content-type':'application/json'});
			var timef = {"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()};
			res.write(JSON.stringify(timef));
			res.end();
		}
	}
});
server.listen(process.argv[2]);

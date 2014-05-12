var net = require('net');
//starting a standard TCP server.
var server = net.createServer(function (socket){
	socket.end(dateHandler()); //could use .write, but .end takes data object/closes.
});
server.listen(+process.argv[2]);
//take first argument as port number.

function zerod(i){	//made this a function since its reused a lot.
	return (i < 10 ? '0'+i : i);	//adds a zero if less than 10.
}

function dateHandler(){
	var date = new Date();
	return date.getFullYear()+'-'+
		zerod(date.getMonth()+1)+'-'+
		zerod(date.getDate())+' '+
		zerod(date.getHours())+':'+
		zerod(date.getMinutes())+'\n';	//just date format. YYYY-MM-DD hh:mm
}

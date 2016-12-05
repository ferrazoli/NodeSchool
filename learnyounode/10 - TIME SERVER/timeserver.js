var net = require("net");
var d3 = require("d3-time-format");

var port = process.argv[2];
var server = net.createServer(listener);
server.listen(port);

function listener(socket) {			
	socket.write(createClock());
	socket.end();
}

function createClock() {
	var formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
	var clock = formatTime(new Date) + "\n";		
	return clock;
}
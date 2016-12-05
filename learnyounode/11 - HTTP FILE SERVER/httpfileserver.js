var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(listener);
server.listen(port);

function listener(req, res) {
	var fileStream = fs.createReadStream(path);
	fileStream.pipe(res);
}
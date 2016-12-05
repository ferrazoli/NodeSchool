var http = require("http");
var url = require("url");
var port = process.argv[2];

var server = http.createServer(listener);
server.listen(port);

function listener(req, res) {
	if (req.method == "GET") {
		var request = url.parse(req.url, true);
		var isotime = request.query.iso;
		
		console.log(isotime);
		
		res.writeHead(200, {"Content-Type": "application/json"});
		
		if (request.pathname == "/api/parsetime") {
			res.write(JSON.stringify(ISOtoJSON(isotime)));
		}
		if (request.pathname == "/api/unixtime") {
			res.write(JSON.stringify(ISOtoUNIX(isotime)));
		}				
	}	
	res.end();
}

function ISOtoUNIX(iso) {
	var date = new Date(iso);
	var unix = {};
	unix.unixtime = date.getTime();
	return unix;
}

function ISOtoJSON(iso) {
	var date = new Date(iso);
	var json = {};
	json.hour = date.getHours();
	json.minute = date.getMinutes();
	json.second = date.getSeconds();
	return json;
}
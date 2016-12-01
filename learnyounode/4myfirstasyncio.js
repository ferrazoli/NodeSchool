var fs = require("fs");
var path = process.argv[2];
var buffer = fs.readFile(path, function callback(err, data) {
	if (!err) {
		var str = data.toString();
		var newlines = str.split("\n").length - 1;
		console.log(newlines);
	}
});

var fs = require("fs");
var path = process.argv[2];
var filter = process.argv[3];

var buffer = fs.readdir(path, function callback(err, data) {
	if (!err) {				
		data.forEach(function (item, index) {			
			if (item.substring(item.length-1-filter.length,item.length) === "."+filter)
				console.log(item);
		});				
	}
});


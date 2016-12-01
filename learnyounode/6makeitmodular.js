var mymodule = require("./6module.js");
var path = process.argv[2];
var filter = process.argv[3];

mymodule(path, filter, function (err, data) {
	if (!err)
		data.forEach(function (item, index) {
			console.log(item);
		});
});
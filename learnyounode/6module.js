function filterByExtension(path, filter, function callback(err, data)) {
	var fs = require("fs");

	var buffer = fs.readdir(path, function callback(err, data) {
		if (err)
			callback(err);
		else {				
			var filteredList = [];
			data.forEach(function (item, index) {			
				if (item.substring(item.length-1-filter.length,item.length) === "."+filter)
					filteredList.push(item);
			});				
			callback(null, filteredList);
		}
	});	
}

module.exports = filterByExtension;
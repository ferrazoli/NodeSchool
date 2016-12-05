var fs = require("fs");

function filterByExtension(path, filter, callback) {	
	fs.readdir(path, function (err, data) {
		if (err)
			return callback(err);		
		
		var filteredList = [];
		data.forEach(function (item, index) {			
			if (item.substring(item.length-1-filter.length,item.length) === "."+filter)
				filteredList.push(item);
		});				
		return callback(null, filteredList);
	});
}	

module.exports = filterByExtension;
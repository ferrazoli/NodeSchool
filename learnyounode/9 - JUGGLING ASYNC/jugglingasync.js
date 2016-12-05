var http = require("http");
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var fullData = ["","",""];
var count = 0;

urls.forEach(function(url, i){
	http.get(url,function (response) {
		response.setEncoding("utf8");
		response.on("data", function (data) {
			fullData[i] += data;		
		});	
		response.on("end", function(){
			if (count == 2) {
				fullData.forEach(function(data){
					console.log(data);
				});
			} else 	count++;					
		});
	});		
});
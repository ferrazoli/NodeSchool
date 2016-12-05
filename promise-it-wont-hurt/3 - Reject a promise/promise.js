var promise = new Promise(function (fulfill, reject) {
	setTimeout(function () {
		reject(new Error("REJECTED!"));
	},300);	
}).then(null, function(onReject) {
	console.log(onReject.message);
});
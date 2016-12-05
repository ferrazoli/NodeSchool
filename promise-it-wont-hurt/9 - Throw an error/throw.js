var json = process.argv[2];
function parsePromised(json) {
	return new Promise(function(fulfill, reject){
		try {
			parse = JSON.parse(json);
			fulfill(parse);
		} catch (e) {
			reject(e);
		}
	});
}
parsePromised(json).then(null, console.log);
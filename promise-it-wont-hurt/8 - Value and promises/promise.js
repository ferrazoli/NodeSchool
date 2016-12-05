function attachTitle(arg) {
	return "DR. " + arg;
}
new Promise(function (fulfill, reject){
	fulfill("MANHATTAN");
}).then(attachTitle).then(console.log);

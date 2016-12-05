
new Promise(function(fulfill, reject){
	reject(new Error("Kappa 1 2 3"));
}).catch(function (err) {
	console.error('Error');
	console.error(err.message);
});

var promiseResolve = Promise.resolve('Fulfill');

var promiseReject = Promise.reject(new Error('Reject'));
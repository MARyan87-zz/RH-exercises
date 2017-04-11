function foo(callback) {
	doThing(function(err, res) {
		if (err) {
			callback(err);

		}

		callback(null, res);
		
	});
}

foo(function(err, res){
	console.log('Done!. err=', err, ' : res = ', res);
});

function doThing (cb) {  // doThing has to run a callback in order to signal that it has completed.
	cb(null, 42);
}
function remoteMathService(cb) {
	var one;
    var two;
	
	callOneService(function(err, num) {		/* The problem is this code is asynchronous, and will continue to run
											   and return the callback function on line 14 before the service functions 
											   complete.  Solution is to call each function inside the prior functions 
											   callback so they will only run when the prior function is finished. */
		one = num;
	 	
	 	callTwoService(function(err, num) {
    		two = num;
	 		
	 		return cb(undefined, one + two);
    	});
    });
}

function callOneService(cb) {
	setTimeout(function() {
	  return cb(undefined, 1);
	}, 1000);
}

function callTwoService(cb) {
	setTimeout(function() {
	  return cb(undefined, 2);
	}, 1500);
}

remoteMathService(function(err, answer) {
	if (err) console.log("error ", err);
	if (answer !== 3) {
	  console.log("wrong answer", answer);
	} else {
	  console.log("correct");
	}
});

// Test function
function testMathService (expected) {
	remoteMathService(function(err, answer) {
		if (answer !== expected) {
			console.error("Test Failed!");
		} else {
			console.log("Test Passed!");
		}
	})
}

testMathService(3); // Passes
testMathService(2); // Fails


var express  = require("express"),
	request  = require("request"),
	Router   = express.Router();


Router.get("/getUsers", function (req, res) {
	var usersURL = "http://jsonplaceholder.typicode.com/users";

	request(usersURL, function (err, response, body) {
		if (err) {
			console.log("request.js - Error fetching users: ", err);
			res.send(err);
		} else {
			res.json(body);
		}
	})
});

module.exports = Router;

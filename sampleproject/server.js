var express    = require("express"),
	routes     = require("./routes/request.js"),
	Router     = express.Router(),
	app        = express(),
	PORT       = process.env.PORT || 3000;

app.use(express.static("./public"));
app.use(routes);

app.listen(PORT, function () {
	console.log("Listening on port ", PORT);
});
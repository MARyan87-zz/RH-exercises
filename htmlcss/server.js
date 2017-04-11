var express = require("express");

var app = express();

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/'));
app.use(express.static("./public"));

app.listen(process.env.PORT || 3000, function () {
	console.log("listening...");
});
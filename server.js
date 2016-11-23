var mysql = require('mysql');
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function() {
	console.log("Web server started !!");
})

var mysql = require('mysql');
var bodyParser = require("body-parser");
var express = require("express");
var db = require('./db.js');
//var visualCaptcha = require('./visualCaptcha.js');
var PORT = process.env.PORT || 3000;
var app = express();
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});

app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'homedb',
	database: 'mysql',
	password: 'admin'
});


app.post("/submitRegistration", urlencodedParser, function(req, res) {
	console.log(req.body);
	var formObject = req.body;
	db.application.findOne({
		where : {
			email : formObject.email,
			mobile : formObject.mobile,
			phone : formObject.phone,
			firstName : formObject.firstName,
			lastName : formObject.lastName
		}
	}).then(function(appln) {
		if(appln) {
			console.log('Entry found');
			res.status(400).json('Application already exists for the same candidate');
		} else {
			db.application.create(formObject).then(function(application) {
				res.json(application.toJSON());
			}, function(e) {
				console.log(e);
				res.status(400).json(e);
			});
			console.log('Entry not found');
		}
		
	});
	/*connection.query('insert into student set ?', formObject, function(error, result) {
		if (error) {
			console.log(error);
		} else {
			console.log('Success');
		}
	});*/

	// g-recaptcha-response is the key that browser will generate upon form submit.
	// if its blank or null means user has not selected the captcha, so return the error.
	/*if (formObject['g-recaptcha-response'] === undefined || formObject['g-recaptcha-response'] === '' || formObject['g-recaptcha-response'] === null) {
		return res.json({
			"responseCode": 1,
			"responseDesc": "Please select captcha"
		});
	}*/
	// Put your secret key here.
	var secretKey = "6Ldwaw4UAAAAAIMKalb1oHX4Y2igSMleSI9NxMPW";
	// req.connection.remoteAddress will provide IP address of connected user.
	var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + formObject['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
	// Hitting GET request to the URL, Google will respond with success or error scenario.
	/*request(verificationUrl, function(error, response, body) {
		body = JSON.parse(body);
		// Success will be true or false depending upon captcha validation.
		if (body.success !== undefined && !body.success) {
			return res.json({
				"responseCode": 1,
				"responseDesc": "Failed captcha verification"
			});
		}
		res.json({
			"responseCode": 0,
			"responseDesc": "Sucess"
		});
	});*/



	
});

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Web server started !!");
	});
}).catch(function(e) {
	console.log(e);
});
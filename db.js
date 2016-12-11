var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql', 'homedb', 'admin', {
	'dialect': 'mysql',
});
var db = {};

db.application = sequelize.import(__dirname + '/models/application.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
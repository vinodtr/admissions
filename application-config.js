var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql', 'homedb', 'admin', {
	'dialect': 'mysql',
});

// Application model
var Application = sequelize.define('application', {
	applicationId: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isNumeric: true
		}
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	middleName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gender: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isIn: [
				['male', 'female']
			]
		}
	},
	dob: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isDate: true
		}
	},
	nationality: {
		type: Sequelize.STRING,
		allowNull: false
	},
	otherCategory: {
		type: Sequelize.STRING,
	},
	addressLine1: {
		type: Sequelize.STRING,
		allowNull: false
	},
	addressLine2: {
		type: Sequelize.STRING,
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	postalCode: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isNumeric: true
		}
	},
	phone: {
		type: Sequelize.STRING,
		validate: {
			isNumeric: true
		}
	},
	mobile: {
		type: Sequelize.STRING,
		validate: {
			isNumeric: true
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
	confirmEmail: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
	prevInstitution: {
		type: Sequelize.STRING,
	},
	percentage: {
		type: Sequelize.STRING,
		validate: {
			isDecimal: true
		}
	},
	validate: {
		phoneOrMobileIsMandatory: function() {
			if ((this.phone == null) && (this.mobile == null)) {
				throw new Error('Either Mobile or Phone number is mandatory');
			}
		}
	}
});


sequelize.sync().then(function() {
	console.log('ORM is in sync');
}).catch(function (e) {
	console.log(e);
});
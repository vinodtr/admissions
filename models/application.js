var _ = require('underscore');
module.exports = function(sequelize, Datatypes) {
	return sequelize.define('application', {
		applicationId: {
			type: Datatypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			validate: {
				isNumeric: true
			}
		},
		firstName: {
			type: Datatypes.STRING,
			allowNull: false
		},
		middleName: {
			type: Datatypes.STRING,
		},
		lastName: {
			type: Datatypes.STRING,
			allowNull: false
		},
		gender: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				isIn: [
					['male', 'female']
				]
			}
		},
		dob: {
			type: Datatypes.DATE,
			allowNull: false,
			validate: {
				isDate: true
			}
		},
		nationality: {
			type: Datatypes.STRING,
			allowNull: false
		},
		otherCategory: {
			type: Datatypes.STRING,
		},
		addressLine1: {
			type: Datatypes.STRING,
			allowNull: false
		},
		addressLine2: {
			type: Datatypes.STRING,
		},
		city: {
			type: Datatypes.STRING,
			allowNull: false
		},
		state: {
			type: Datatypes.STRING,
			allowNull: false
		},
		postalCode: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				isNumeric: true
			}
		},
		phone: {
			type: Datatypes.STRING,
			validate: {
				isNumeric: true
			}
		},
		mobile: {
			type: Datatypes.STRING,
			validate: {
				isNumeric: true
			}
		},
		email: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		confirmEmail: {
			type: Datatypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		prevInstitution: {
			type: Datatypes.STRING,
		},
		percentage: {
			type: Datatypes.STRING,
			validate: {
				isDecimal: true
			}
		}
	}, {
		validate: {
			phoneOrMobileIsMandatory: function() {
				if ((this.phone == null) && (this.mobile == null)) {
					throw new Error('Either Mobile or Phone number is mandatory');
				}
			}
		},
	}, {
		instanceMethods: {
			getDob: function() {
				console.log(this.dob.format('MM/DD/YYYY'));
				return this.dob;
			}
		}
	});
};
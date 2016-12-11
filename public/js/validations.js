$.validator.addMethod('phoneOrMobileIsMandatory', function(value, element) {
	var phone = $("#phone").val();
	var mobile = $("#mobile").val();
	if ((phone == undefined || phone.trim().length == 0) && (mobile == undefined || mobile.trim().length == 0)) {
		return false;
	}
	return true;
}, "Please enter either a Phone number or Mobile number");


$.validator.addMethod('emailMatch', function(value, element) {
	var email = $("#email").val();
	var confirmEmail = $("#confirmEmail").val();
	if (confirmEmail != email) {
		return false;
	}
	return true;
}, "Email & Confirm Email fields must match");
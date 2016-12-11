// Wait for the DOM to be ready


$(document).ready(function(){
	/*$("#registrationForm").submit(function() {
       	return true;
    });*/


 $("#categorySelection").change(function() {
 	if($("#categorySelection").val() == "others") {
		$("#category").val('');
		$("#category").show();
	} else {
		$("#category").hide();
		$("#category").val(this.value);
	}
 });

 $("#registrationForm").validate({
    
        // Specify the validation rules
        rules: {/*
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            confirmEmail: {
                required: true,
                email: true,
                emailMatch: true
            },
            percentage: {
            	number:true,
            	min: 0,
            	max: 100
            },
            dob: {
            	required: true,
            	dateITA: true
            },
            otp: {
            	required: true
            },
            mobile: {
            	digits: true,
            	phoneOrMobileIsMandatory: true
            },
            phone: {
            	digits: true
            },
            addressLine1 : "required",
            city: "required",
            state: "required",
            postalCode: {
            	required: true,
            	digits: true
            },
            nationality: "required",
            gender: "required",
            classAdmission: "required"

        */},
        
        // Specify the validation error messages
        messages: {
            firstName: "Please enter your first name",
            lastName: "Please enter your last name",
            email: "Please enter a valid email address",
            percentage: "Percentage must be between 0 and 100",
            dob: "Enter Date of Birth in DD/MM/YYYY format"
        },
        
        submitHandler: function(form) {
        	form.submit();
        }
    });


});
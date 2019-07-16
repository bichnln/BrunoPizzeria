function validate() {
	/*get access to html registration form element */
	var fname =  document.getElementById("firstname").value;
	var sname = document.getElementById("surname").value;
	var dobDay = document.getElementById("dobDay").value;
	var dobMonth = document.getElementById("dobMonth").value;
	var dobYear = document.getElementById("dobYear").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var username = document.getElementById("username").value;
	var genderM = document.getElementById("genderM").checked;
	var genderF = document.getElementById("genderF").checked;
	var useremail = document.getElementById("useremail").value;
	
	
	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */
	
	/* Rule 1, check if all required inputs have value */
	if (fname == "") {
		errMsg += "Firstname cannot be empty. \n";
	}
	if (sname == "") {
		errMsg += "Surname cannot be empty. \n";
	}
	if (pwd1 == ""){
		errMsg += "Password cannot be empty. \n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty. \n";
	}
	if (username == ""){
		errMsg += "User name cannot be empty. \n";
	}
	if ((genderM =="") && (genderF =="")) {
		errMsg += "A gender must be selected. \n";
	}
	if ((dobDay == "") || (dobMonth == "") || (dobYear == "")) {
		errMsg += "Please enter your date of birth. \n";
	}
	if (useremail == "") {
		errMsg += "Email cannot be empty. \n";
	}

	/* check if password length is <8 characters */
	
	if (pwd1.length < 8 && pwd1.length != "") {
		errMsg += "Password must have at least 8 characters \n";
	}
	/*  check if password and retype password are the same */
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
		
	
	/* check if user name contains only letters and spaces */
	
	if ((! username.match (pattern)) && (username != "")) {
		errMsg += "User name contains symbols. \n";
	}
	
	
	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	
	return result;
}


/* link HTML elements to corresponding event function */
function init() {

	/* link the variables to the HTML elements */
  var regform = document.getElementById("regform");	/* assigns functions to corresponding events */
  
  regform.onsubmit = validate;
 
 
}

/* execute the initialisation function once the window*/
window.onload = init;
var cardNumberDigit;	

function validate () {	
	/* order form elements at the beginning*/
	var contactNumber = document.getElementById("contactNumber").value;
	var emailForReceipt = document.getElementById("emailForReceipt").value;
	var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
	var payOnPickup = document.getElementById("payOnPickup").checked;
	var onlinePayment = document.getElementById("onlinePayment").checked;
	
	
	var errMsg ="";  /* stores error messages, blank at first */
	var result = true; /* assuming there is no error */
	var numberPattern = /"[0-9]+"/ ; /*regualr expression for letter and spaces only */
	
	/* check if all required inputs have value and values are valid */
	
	if ( contactNumber == "") {
		errMsg += "Please enter you contact number. \n" ;
	}
	if ((contactNumber != "") && (! contactNumber.match(numberPattern))){
		errMsg += "Contact number can only contain number. \n";
	}
	if ( emailForReceipt ==""){
		errMsg += "Please enter your email address so we can send you the receipt. \n";
	}
	
	if ((pickup =="") && (delivery == "")) {
		errMsg += "Please choose delivery option. \n";
	}
	if ((payOnPickup =="") && (onlinePayment == "")) {
		errMsg += "Please choose payment method. \n";
	}
	/* check if delivery address is input or not, only if delivery option is chosen */
	if (delivery != "" ){
		/* get access to html element of delivery and billing address */
		var streetAddress = document.getElementById("streetAddress").value;
		var city = document.getElementById("city").value;
		var postalCode = document.getElementById("postalCode").value;
		var billingStreetAddress = document.getElementById("billingStreetAddress").value;
		var billingCity = document.getElementById("billingCity").value;
		var billingPostalCode = document.getElementById("billingPostalCode").value;
		
		
		if ((streetAddress == "") || (city == "") || (postalCode =="")){
			errMsg += "Delivery Address must be completely filled in. \n";
		}
		// check if postal code has 4 digits 
		if ((postalCode != "") && ((! postalCode.match (numberPattern)) || (postalCode.length != 4))) {
			errMsg += "Postal code must contain 4 digits only. \n";
		}
		if ((billingStreetAddress == "") || (billingCity == "") || (billingPostalCode == "")) {
			errMsg += "Billing Address must be completely filled in. \n";
		}
		// check if billing postal code has 4 digits 
		if ((billingPostalCode != "") && ((! billingPostalCode.match (numberPattern)) || (billingPostalCode.length != 4))) {
			errMsg += "Billing Postal code must contain 4 digits only. \n";
		}
		
		
	}
	/* check if card info is input or not, only when online payment is chosen */
	 if (onlinePayment != "") {
		 /* get access to html credit card info element */
		 
		 var mCard = document.getElementById("MasterCard").checked;
		 var vCard = document.getElementById("VisaCard").checked;
		 var ameExp = document.getElementById("AmericanExp").checked;
		 var cardNumber = document.getElementById("cardNumber").value;
		 var expDate = document.getElementById("expDate").value;
		 var securityCode = document.getElementById("securityCode").value;
		 
		 if ((vCard == "") && (mCard == "") && (ameExp == "")) {
			 errMsg += "Please choose your card type. \n";
		 }
		 		 
		 if (cardNumber == ""){
			 errMsg += "Please input your card number. \n";
		 } 
		 
		 if (((cardNumber.length != cardNumberDigit) || (! cardNumber.match(numberPattern))) && (cardNumber != "")) {  // check if number of digits valid 
			 errMsg += "Card must have " + cardNumberDigit + " digits.\n";
		 }
		 if (expDate =="") {
			 errMsg += "Please insert your expiry date of your card. \n";
		 }
		 if (securityCode == "") {
			 errMsg += "Please insert security code of your card. \n";
		 }
	 }

	
	
	
	/* Show error messages if there is error */
	
	if(errMsg !="") {
		alert (errMsg);
		result = false;
	}
	return result;
}
/* DELIVERY ADDRESS */
/* show delivery address informtion form if delivery opt is chosen */
function showDeliAddr (){
	var deliAddr = document.getElementById("deliveryAddr");
	deliAddr.style.display = "block";

}
/* hide delivery address informtion form if delivery opt is chosen */
function hideDeliAddr () {
	var deliAddr = document.getElementById("deliveryAddr");
	deliAddr.style.display = "none";

}
/* CREDIT CARD INFORMATION */
/* show card information if online payment is selected */
function showCreditCardInfo () {
	var creditCardInfo = document.getElementById("creditCardInfo");
	creditCardInfo.style.display = "block";
}
/* hide card information if online payment is selected */
function hideCreditCardInfo () {
	var creditCardInfo = document.getElementById("creditCardInfo");
	creditCardInfo.style.display = "none";
}
/*copy text from delivery address and paste to billing address */
function autoFilling() {
	if ( document.getElementById("sameAsDelivery").checked == true){ //check if checkbox is checked
	
	/*get access to html elements of delivery address */
	var city = document.getElementById("city").value;
	var streetAddress = document.getElementById("streetAddress").value; 
	var postalCode  = document.getElementById("postalCode").value;
	
	
	if((city == "") || (streetAddress == "") || (postalCode == "")) { //check if delivery address is completed or not 
		alert("Please complete your delivery address first.\n"); 
		document.getElementById("sameAsDelivery").checked = false; //checkbox unchecked if delivery address is not completed
	}
	else { // copy value from delivery and paste value to billing address 
	document.getElementById("billingCity").value = city;
	document.getElementById("billingStreetAddress").value = streetAddress;
	document.getElementById("billingPostalCode").value = postalCode;
	}
	}
}
/*show number of required digits which depends on type of card chosen*/
function numberOfDigits() {
	document.getElementById("numberOfDigits").style.display = "inline";
	if((document.getElementById("MasterCard").checked == true) || (document.getElementById("VisaCard").checked==true)) {
		cardNumberDigit = 16;
	}
	if(document.getElementById("AmericanExp").checked == true){
		cardNumberDigit = 15;
	}
	document.getElementById("numberOfDigits").innerHTML= "Please enter " + cardNumberDigit + " digits";
}
/* main function */
function init() {
	/* get access to HTML element of delivery, pickup, payOnPickup, onlinePayment */
	var delivery = document.getElementById("delivery"); 
	var pickup = document.getElementById("pickup");
	var payOnPickup = document.getElementById("payOnPickup");
	var onlinePayment = document.getElementById("onlinePayment");
	
	delivery.checked = false; //uncheck delivery when refresh page
	pickup.checked = false; //uncheck pickup when refresh page
	payOnPickup.checked = false; //uncheck payOnPickup when refresh page;
	onlinePayment.checked = false; //uncheck onlinePayment when refresh page;
	
	var mCard = document.getElementById("MasterCard");
	var vCard = document.getElementById("VisaCard");
	var ameExp = document.getElementById("AmericanExp");
	
	/* either master/visa card or american express card is chosen will trigger numberOfDigits function */
	mCard.onclick = numberOfDigits;
	vCard.onclick = numberOfDigits;
	ameExp.onclick = numberOfDigits;
	
	
	payOnPickup.onclick = hideCreditCardInfo; //hide credit card info if payOnPickup is chosen
	onlinePayment.onclick = showCreditCardInfo; //show credit card info if onlinePayment is chosen
	
	pickup.onclick = hideDeliAddr; // hide delivery address if pickup is chosen
	delivery.onclick = showDeliAddr; // show delivery address if delivery is chosen
	
	document.getElementById("sameAsDelivery").onclick = autoFilling;  //automatically input billing address is checkbox is checked
	
	var regform = document.getElementById("regform");
	regform.onsubmit = validate;
}

window.onload = init;
	
	

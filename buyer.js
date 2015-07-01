/*----------------------------------
	File: CSP.js
	Date: 10/30/2014
	Author: Jeanis Sananikone
----------------------------------*/

function displayHeader(){
	document.write("<h1>Client-Side Programming</h1>");
}

function displayNav(){
	document.write("<a href='index.html'>Home</a>");
	document.write("<a href='calculator.html'>Calculator</a>");
	document.write("<a href='primeNumbers.html'>Primes</a>");
	document.write("<a href='CVR1.html'>Ads</a>");
	document.write("<a href='forms.html'>Forms</a>");
	document.write("<a href='objects.html'>Objects</a>");
	document.write("<a href='buyer_backup.html'>REGEX</a>");
	document.write("<a href='buyer.html'>Cookies</a>");
	document.write("<a href='shop.html'>Shop</a>");
	document.write("<a href='promo.html'>Promo</a>");	
}

function displayFooter(){
	getLastModified();
	document.write("<p>Oklahoma City Community College does not necessarily endorse the content or respective links of this page. </p>");
}

function getLastModified()
{
	var updatedDate = new Date(document.lastModified);
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	document.write("Last Modified: " + updatedDate.getDate() + "-" + months[updatedDate.getMonth()] + "-" + updatedDate.getFullYear());
}

//*******Chapter 7: REGEX*******
function validate()
{
	var error = false;
	
	//Regular Expressions
	var namesExp = /^[A-Z0-9a-z\s]/;	//For names, address, and cities
	var zipExp = /^[0-9]{5}(?:-[0-9]{4})?$/;	//for zip code
	var emailExp = /^[_a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
	var threeDigits = /^[0-9]{3}$/;	//For phone and cell numbers
	var fourDigits = /^[0-9]{4}$/;
	
	//Get form values:
	var FName = document.getElementById("FirstName").value;
	var LName = document.getElementById("LastName").value;
	var phoneA = document.getElementById("PhoneA").value;
	var phoneB = document.getElementById("PhoneB").value;
	var phoneC = document.getElementById("PhoneC").value;
	var cellA = document.getElementById("Cell_PhoneA").value;
	var cellB = document.getElementById("Cell_PhoneB").value;
	var cellC = document.getElementById("Cell_PhoneC").value;
	var email = document.getElementById("Email").value;
	var emailConfirm = document.getElementById("ConfirmEmail").value;
	var address1 = document.getElementById("Address1").value;
	var address2 = document.getElementById("Address2").value;
	var city = document.getElementById("City").value;
	var stateSelected = document.getElementById("State").value;
	var zip = document.getElementById("Zip").value;
	
	//Validate the form objects
	
	//ZIP CODE
	if(zipExp.test(zip) == false || zip == "")
	{
		document.getElementById("E_Zip").style.visibility = "visible";
		document.forms[0].Zip.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_Zip").style.visibility = "hidden";
		document.forms[0].Zip.style.backgroundColor = "white";
	}
	
	//STATE
	if(stateSelected == "")
	{
		document.getElementById("E_State").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("E_State").style.visibility = "hidden";
	}
	
	//CITY
	if(namesExp.test(city) == false || city == "")
	{
		document.getElementById("E_City").style.visibility = "visible";
		document.forms[0].City.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_City").style.visibility = "hidden";
		document.forms[0].City.style.backgroundColor = "white";
	}
	
	//ADDRESS 2
	if(namesExp.test(address2) == false && address2 != "")
	{
		document.getElementById("E_Address2").style.visibility = "visible";
		document.forms[0].Address2.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_Address2").style.visibility = "hidden";
		document.forms[0].Address2.style.backgroundColor = "white";
	}
	
	//ADDRESS 1
	if(namesExp.test(address1) == false || address1 == "")
	{
		document.getElementById("E_Address1").style.visibility = "visible";
		document.forms[0].Address1.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_Address1").style.visibility = "hidden";
		document.forms[0].Address1.style.backgroundColor = "white";
	}
	
	
	//EMAIL CONFIRMATION
	if(emailConfirm != email)
	{
		document.getElementById("E_ConfirmEmail").style.visibility = "visible";
		document.forms[0].ConfirmEmail.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_ConfirmEmail").style.visibility = "hidden";
		document.forms[0].ConfirmEmail.style.backgroundColor = "white";
	}
	
	//EMAIL
	if(emailExp.test(email) == false || email == "")
	{
		document.getElementById("E_Email").style.visibility = "visible";
		document.forms[0].Email.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_Email").style.visibility = "hidden";
		document.forms[0].Email.style.backgroundColor = "white";
	}
	
	//CELL
	if((threeDigits.test(cellA) == false || threeDigits.test(cellB) == false || fourDigits.test(cellC) == false) && (cellA != "" || cellB != "" || cellC != ""))
	{
		document.forms[0].Cell_PhoneA.style.backgroundColor = "lemonchiffon";
		document.forms[0].Cell_PhoneB.style.backgroundColor = "lemonchiffon";
		document.forms[0].Cell_PhoneC.style.backgroundColor = "lemonchiffon";
		document.getElementById("E_Phone").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("E_Cell").style.visibility = "hidden";
		document.forms[0].Cell_PhoneA.style.backgroundColor = "white";
		document.forms[0].Cell_PhoneB.style.backgroundColor = "white";
		document.forms[0].Cell_PhoneC.style.backgroundColor = "white";
	}
	
	//PHONE
	if(threeDigits.test(phoneA) == false || threeDigits.test(phoneB) == false || fourDigits.test(phoneC) == false)
	{
		document.forms[0].PhoneA.style.backgroundColor = "lemonchiffon";
		document.forms[0].PhoneB.style.backgroundColor = "lemonchiffon";
		document.forms[0].PhoneC.style.backgroundColor = "lemonchiffon";
		document.getElementById("E_Phone").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("E_Phone").style.visibility = "hidden";
		document.forms[0].PhoneA.style.backgroundColor = "white";
		document.forms[0].PhoneB.style.backgroundColor = "white";
		document.forms[0].PhoneC.style.backgroundColor = "white";
	}
	
	//LAST NAME
	if(namesExp.test(LName) == false || LName == "")
	{
		document.getElementById("E_LastName").style.visibility = "visible";
		document.forms[0].LastName.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_LastName").style.visibility = "hidden";
		document.forms[0].LastName.style.backgroundColor = "white";
	}
	
	//FIRST NAME
	if(namesExp.test(FName) == false || FName == "")
	{
		document.getElementById("E_FirstName").style.visibility = "visible";
		document.forms[0].FirstName.style.backgroundColor = "lemonchiffon";
		error = true;
	}
	else
	{
		document.getElementById("E_FirstName").style.visibility = "hidden";
		document.forms[0].FirstName.style.backgroundColor = "white";
	}
	
	//ERROR CHECKING:
	if(error == false)
	{
		createCookie();
		return true;
	}
	else
	{
		document.getElementById("E_Alert").style.visibility = "visible";
		return false;
	}
}

//*******Chapter 9: COOKIES*******
function createCookie()
{
	var FName = document.getElementById("FirstName").value;
	var LName = document.getElementById("LastName").value;
	var Phone = document.getElementById("PhoneA").value + document.getElementById("PhoneB").value + document.getElementById("PhoneC").value; //Combines all parts of phone number
	var Email = document.getElementById("Email").value;
	var expDate = new Date();
	expDate.setMinutes(expDate.getMinutes() + 5);	//Cookies expire in 5 minutes
	
	//Creates cookies
	document.cookie = "FirstName=" + FName + ";expires=" + expDate.toGMTString();	
	document.cookie = "LastName=" + LName + ";expires=" + expDate.toGMTString();
	document.cookie = "Phone=" + Phone + ";expires=" + expDate.toGMTString();
	document.cookie = "Email=" + Email + ";expires=" + expDate.toGMTString();
}

function getCookie()
{
	var allCookies = document.cookie;	//Gathers all cookies
	var cookieArray = allCookies.split("; ");	//Converts string to an array with cookies
	
	//Sets values to corresponding variables
	var FName = cookieArray[0].substring(cookieArray[0].lastIndexOf("=") + 1);
	var LName = cookieArray[1].substring(cookieArray[1].lastIndexOf("=") + 1);
	var phone = cookieArray[2].substring(cookieArray[2].lastIndexOf("=") + 1);
	var Email = cookieArray[3].substring(cookieArray[3].lastIndexOf("=") + 1);
	var FullName = FName + " " + LName;
	var phoneNum = "(" + phone.substring(0, 3) + ") " + phone.substring(3, 6) + "-" + phone.substring(6, phone.length);
	
	document.write("<p>");
	document.write("Thank you, " + FName + ", for shopping with us.<br />We will email you when your order is ready to be shipped.<br/><br/>");
	document.write("Your contact information on record: <br/>");
	document.write("Name: " + FullName + "<br/>");
	document.write("Email Address: " + Email + "<br/>");
	document.write("Phone Number: " + phoneNum + "<br/>");
	document.write("</p>");
}

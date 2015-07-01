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

//*******Assignment 2: Calculator*******
function updateString(value){
	var updateString = value;
	
	if(updateString == "="){
	calculator.inputString.value = eval(calculator.inputString.value);
	}
	else if(updateString == "c"){
	calculator.inputString.value = '';
	}
	else{
	calculator.inputString.value += updateString;
	}
}	
//******************************************

//*******Assignment 3: Prime Numbers*******
function validateInput(){
	var minNum = 1;
	var maxNum = 50000;
	var firstElement = document.getElementById("firstNum").value;
	var endElement = document.getElementById("endNum").value;
	var firstNum = parseInt(firstElement);
	var endNum = parseInt(endElement);
	
	//Makes sure there are values in each textbox
	if(firstElement == "" || endElement ==""){
		alert("Please enter values in each text box");
		return false;
	}
	
	//Checks if value is numeric
	else if( isNaN(firstElement) == true){
		alert("First number entered needs to be a positive number");
		return false;
	}
	
	//Checks if value is numeric
	else if( isNaN(endElement) == true ){
		alert("Ending number entered needs to be a positive number");
		return false;
	}
	
	//Checks if first value is less than end value
	else if( firstNum >= endNum){
		alert("First number needs to be less than ending number");
		return false;
	}
	
	else if(firstNum < minNum || endNum > maxNum){
		alert("Numbers need to be between 1 and 50,000");
		return false;
	}
	
	else{
		return true;
	}
}

function displayPrimeNumbers(){
	var formData = location.search;
	formData = formData.substring(1, formData.length);
	while (formData.indexOf("+") != -1) {
		formData = formData.replace("+", " ");
	}
	formData = unescape(formData);
	var queryString;
	var formArray = formData.split("&");
	var isPrime;
	var index = 0;
	var numArray = [];
	
	queryString = formArray[0].split("=");
	var firstNum = queryString[1];
	queryString = formArray[1].split("=");
	var endNum = queryString[1];
	
	
	for (var count = firstNum; count < endNum; count++)
	{
		isPrime = true;
		
		//Checks if number is prime
		for( var primeCheck = 2; primeCheck < count; primeCheck++) 
		{
			if(count % primeCheck == 0)
			{
				isPrime = false;
			}
		}
		
		//If number is prime then the number will be assigned to the array.
			if( isPrime == true)	
			{
				numArray[index] = count;
				index++;
			}
		
	}
	
	//Displays Prime numbers:
	var cell = 1;
	var cellPerRow = 10;
	
	document.write("<link href='CS2513Assignments.css' rel='stylesheet'/>")
	
	
	document.write("<table id='primeTable'>");
	document.write("<tr>");
	for(var displayCount = 0; displayCount < numArray.length; displayCount++)
	{
		document.writeln("<td>" + numArray[displayCount] + "</td>");
		if(cell == cellPerRow)
		{
			document.write("</tr><tr>");
			cell = 0;
		}
		
		++cell;
	}
	document.write("</tr>");
	document.write("</table>");
}
//******************************************

//*******Chapter 4: Ads*******

var index = 0;
var adCount = 4;
	
function changeAd()
{	
	var myAd = document.getElementById("adImage");
	var adArray = ["images/cvb2.gif", "images/cvb3.gif", "images/cvb1.gif"];
	myAd.setAttribute("src", adArray[index]);
	index++;
	if(index >= adArray.length)
	{
		index = 0;
	}
}

function startCountdown()
{
	document.getElementById("countText").value = adCount;
	adCount--;
	if(adCount < 0)
	{
		window.location.href = "CVR2.html";
	}

}
	
function startAdPage()
{
	/*var countInterval =*/ setInterval(startCountdown, 1000);
	setInterval(changeAd,2000);
}

//******************************************

//*******Chapter 5: Forms*******
function FormPurchaseValidation()
{
	var error = false;
	var imageSelected = true;
	var sizeSelected = false;
	var orderQuantity = document.getElementById("quantity").value;
	var buyerEmail = document.getElementById("buyerEmail").value;
	var buyerFName = document.getElementById("buyerFName").value;
	var buyerLName = document.getElementById("buyerLName").value;
	var emailExp = /^[_a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
	
	//Checks if image is selected:
	if(document.forms[0].laosImages[0].checked == false &&
		document.forms[0].laosImages[1].checked == false &&
		document.forms[0].laosImages[2].checked == false)
	{
		imageSelected = false;
	}
	
	//Checks if photo size is selected:
	for(var count = 0; count < 5; count++)
	{
		if(document.forms[0].photoSizes[count].checked == true)
		{	
			sizeSelected = true;
			break;
		}
	}
	
	//Checks QUANTITY
	if(orderQuantity <= 0 || orderQuantity > 25 || isNaN(orderQuantity) == true || orderQuantity == "")
	{
		document.getElementById("quantity").focus();
		document.getElementById("errorQuantity").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorQuantity").style.visibility = "hidden";
	}
	
	//Checks SIZE SELECTION
	if(sizeSelected == false)
	{
		document.forms[0].photoSizes[0].focus();
		document.getElementById("errorSizeSelect").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorSizeSelect").style.visibility = "hidden";
	}
	
	//Checks IMAGE SELECTION
	if(imageSelected == false)
	{
		document.forms[0].laosImages[0].focus();
		document.getElementById("errorImageSelect").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorImageSelect").style.visibility = "hidden";
	}
	
	//Checks CUSTOMER INFORMATION
	if(buyerEmail == "" || emailExp.test(buyerEmail) == false)	//EMAIL
	{
		document.getElementById("buyerEmail").focus();
		document.getElementById("errorEmail").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorEmail").style.visibility = "hidden";
	}
	
	if(buyerLName == "")	//LAST NAME
	{
		document.getElementById("buyerLName").focus();
		document.getElementById("errorLName").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorLName").style.visibility = "hidden";
	}
	
	if(buyerFName == "")	//FIRST NAME
	{
		document.getElementById("buyerFName").focus();
		document.getElementById("errorFName").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorFName").style.visibility = "hidden";
	}
	
	
	if(error === false && imageSelected === true)
	{
		return true;
	}
	else{
		return false;
	}

}
//******************************************

//*******Chapter 6: Objects*******
var portraits = new PortraitOrder();

function PurchaseValidation()
{
	var error = false;
	var imageSelected = true;
	var sizeSelected = false;
	var orderQuantity = document.getElementById("quantity").value;
	var buyerEmail = document.getElementById("buyerEmail").value;
	var buyerFName = document.getElementById("buyerFName").value;
	var buyerLName = document.getElementById("buyerLName").value;
	var emailExp = /^[_a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
	
	//Checks if image is selected:
	if(document.forms[0].laosImages[0].checked == false &&
		document.forms[0].laosImages[1].checked == false &&
		document.forms[0].laosImages[2].checked == false)
	{
		imageSelected = false;
	}
	
	//Checks if photo size is selected:
	for(var count = 0; count < 5; count++)
	{
		if(document.forms[0].photoSizes[count].checked == true)
		{	
			sizeSelected = true;
			break;
		}
	}
	
	//Checks QUANTITY
	if(orderQuantity <= 0 || orderQuantity > 25 || isNaN(orderQuantity) == true || orderQuantity == "")
	{
		document.getElementById("quantity").focus();
		document.getElementById("errorQuantity").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorQuantity").style.visibility = "hidden";
	}
	
	//Checks SIZE SELECTION
	if(sizeSelected == false)
	{
		document.forms[0].photoSizes[0].focus();
		document.getElementById("errorSizeSelect").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorSizeSelect").style.visibility = "hidden";
	}
	
	//Checks IMAGE SELECTION
	if(imageSelected == false)
	{
		document.forms[0].laosImages[0].focus();
		document.getElementById("errorImageSelect").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorImageSelect").style.visibility = "hidden";
	}
	
	//Checks CUSTOMER INFORMATION
	if(buyerEmail == "" || emailExp.test(buyerEmail) == false)	//EMAIL
	{
		document.getElementById("buyerEmail").focus();
		document.getElementById("errorEmail").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorEmail").style.visibility = "hidden";
	}
	
	if(buyerLName == "")	//LAST NAME
	{
		document.getElementById("buyerLName").focus();
		document.getElementById("errorLName").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorLName").style.visibility = "hidden";
	}
	
	if(buyerFName == "")	//FIRST NAME
	{
		document.getElementById("buyerFName").focus();
		document.getElementById("errorFName").style.visibility = "visible";
		error = true;
	}
	else
	{
		document.getElementById("errorFName").style.visibility = "hidden";
	}
	
	
	if(error === false && imageSelected === true)
	{
		GetValues();
		DisplayOutput();
		return true;
	}
	else{
		return false;
	}

}

//Returns the date that the files has been last modified:
function getLastModified()
{
	var updatedDate = new Date(document.lastModified);
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	document.write("Last Modified: " + updatedDate.getDate() + "-" + months[updatedDate.getMonth()] + "-" + updatedDate.getFullYear());
}

//PortraitOrder Class:
function PortraitOrder(image, copy, size, buyerName){
	this.Portrait = image;
	this.Copies = copy;
	this.Size = size;
	this.Buyer = buyerName;
	this.Cost = CalculateCost;
}
function CalculateCost()
{
	if(this.Size == "4 - Wallets" || this.Size == "2 - 4x6" || this.Size == "5x7")
	{
		return (this.Copies * 10);
	}
	else if(this.Size == "8x10")
	{
		return (this.Copies * 20);
	}
	else
	{
		return (this.Copies * 30);
	}
}



//GetValues() function:
function GetValues(){
	
	for(var count = 0; count < 3; count++)	//Assigns selected image
	{
		if(document.forms[0].laosImages[count].checked == true)
		{
			portraits.Portrait = document.forms[0].laosImages[count].value;
			break;
		}
	}
	
	portraits.Copies = document.getElementById("quantity").value;	//Assigns copies
	
	for(var count = 0; count < 5; count++)	//Assigns selected size
	{
		if(document.forms[0].photoSizes[count].checked == true)
		{	
			portraits.Size = document.forms[0].photoSizes[count].value;
			break;
		}
	}
	
	portraits.Buyer = (document.getElementById("buyerFName").value + " " + document.getElementById("buyerLName").value);
	
	PortraitOrder.prototype.Email = null;
	portraits.Email = document.getElementById("buyerEmail").value;
}

//DisplayOutput function:
function DisplayOutput(){
	
	//Header:
	document.write("<link href='CS2513Assignments.css' rel='stylesheet'/>");
	document.write("<div id='header'>");
	displayHeader();
	document.write("<div id='nav'>");
	displayNav();
	document.write("</div>");
	document.write("</div>");
	
	//Content:
	document.write("<div id='content'>")
	document.write("<h2>Order Summary</h2>");
	document.write("<img src='" + portraits.Portrait + "' width='400' height='274' />");
	document.write("<p>Buyer Name: " + portraits.Buyer);
	document.write("<br />Email: " + portraits.Email);
	document.write("<br />Copies: " + portraits.Copies);
	document.write("<br />Size: " + portraits.Size);
	document.write("<br />Cost: $" + portraits.Cost().toFixed(2));
	document.write("</p>");
	document.write("</div>");
	
	//Footer:
	document.write("<div id='footer'>");
	displayFooter();
	document.write("</div>");
}
//******************************************

//*******Chapter 10: DOM*******
var emptyCart = true;
var curRow = 1;
var shipping = 5;
var subTotal = 0;
var shopItems = [];

//image caching:
for (var count = 0; count < 6; count++)
{
	shopItems[count] = new Image();
	shopItems[count].src = "images/item" + count + ".jpg";
}

// ADD ITEM FUNCTION:
function addItem(selectedItem){
	if(emptyCart == true){
		document.getElementById('shoppingCart').deleteRow(0);
		emptyCart = false;
	}
	var selectedIndex = selectedItem;
	
	//Shopper's status:
	var shopperStatus = document.getElementById("shopperStatus");
	
	//Retrieves all the data in the row
	var curItem = document.getElementById("shoppingTable").rows[selectedItem].cells;
	var itemPic = curItem[selectedItem];
	var selectedItem = curItem[1].innerHTML;
	var itemPrice = curItem[2].innerHTML.substring(1);
	
	
	var lastItem = document.getElementById("shoppingCart").rows.length;
	var cartTable = document.getElementById("shoppingCart");
	
	var newRow = cartTable.insertRow(lastItem);
	document.getElementById("shoppingCart").rows[lastItem].id = "R" + curRow;
	
	var picCell = newRow.insertCell(0);
	picCell.innerHTML = "<img src=\"" + shopItems[selectedIndex + 1].src + "\" width=\"75\" height=\"75\" />";
	
	var itemCell = newRow.insertCell(1);
	itemCell.innerHTML = selectedItem;
	
	var priceCell = newRow.insertCell(2);
	priceCell.innerHTML = "$" + itemPrice;
	
	var actionCell = newRow.insertCell(3);
	actionCell.innerHTML = "<input type=\"button\" value=\"Remove\" " + "onclick=\"removeItem('R" + curRow + "')\" />";
	++curRow;
	
	
	//Changes values in Price Table:
	subTotal = subTotal + parseFloat(itemPrice);
	var tax = subTotal * .05;
	var salesTotal = tax + subTotal + shipping;
	document.getElementById("shopSubtotal").value = ("$" + subTotal.toFixed(2));
	document.getElementById("shopTax").value = "$" + tax.toFixed(2);
	document.getElementById("shopShipping").value = "$" + shipping.toFixed(2);
	document.getElementById("shopTotal").value = "$" + salesTotal.toFixed(2);
	
	if(salesTotal > 0 && salesTotal < 10)
	{
		shopperStatus.innerHTML = "Thank you for shopping with us!";
	}
	else if(salesTotal >= 10 && salesTotal < 25)
	{
		shopperStatus.innerHTML = "You are a VALUED shopper!";
		shopperStatus.style.color = "red";
	}
	else if(salesTotal >= 25 && salesTotal < 50)
	{
		shopperStatus.innerHTML = "You are a SUPER shopper!";
		shopperStatus.style.color = "blue";
	}
	else
	{
		shopperStatus.innerHTML = "You are an ELITE shopper!";
		shopperStatus.style.color = "green";
	}
}

// REMOVE ITEM FUNCTION:
function removeItem(rowNum){
	//Shopper's status:
	var shopperStatus = document.getElementById("shopperStatus");
	
	//If there's only one item left in the shopping cart:
	if(document.getElementById("shoppingCart").rows.length == 1){
		var firstItem = document.getElementById("shoppingCart").rows[0];
		firstItem.deleteCell(1);
		firstItem.innerHTML = "<td>Your shopping cart is empty</td>";
		
		//Resets the price table:
		subTotal = 0;
		tax = 0;
		salesTotal = 0;
		document.getElementById("shopSubtotal").value = ("$" + subTotal.toFixed(2));
		document.getElementById("shopTax").value = "$" + tax.toFixed(2);
		document.getElementById("shopShipping").value = "$0.00";
		document.getElementById("shopTotal").value = "$" + salesTotal.toFixed(2);
		emptyCart = true;
		shopperStatus.innerHTML = "";
	}
	
	//If there is still more than one item in the shopping cart:
	else{
		var selectedRow = document.getElementById(rowNum).rowIndex;
		var itemPrice = document.getElementById("shoppingCart").rows[selectedRow].cells[2].innerHTML.substring(1);
		document.getElementById("shoppingCart").deleteRow(selectedRow);
		
		//Changes values in Price Table:
		subTotal = subTotal - parseFloat(itemPrice);
		tax = subTotal * .05;
		salesTotal = tax + subTotal + shipping;
		document.getElementById("shopSubtotal").value = ("$" + subTotal.toFixed(2));
		document.getElementById("shopTax").value = "$" + tax.toFixed(2);
		document.getElementById("shopShipping").value = "$" + shipping.toFixed(2);
		document.getElementById("shopTotal").value = "$" + salesTotal.toFixed(2);
	
		if(salesTotal > 0 && salesTotal < 10)
		{
			shopperStatus.innerHTML = "Thank you for shopping with us!";
			shopperStatus.style.color = "black";
		}
		else if(salesTotal >= 10 && salesTotal < 25)
		{
			shopperStatus.innerHTML = "You are a VALUED shopper!";
			shopperStatus.style.color = "red";
		}
		else if(salesTotal >=25 && salesTotal < 50)
		{
			shopperStatus.innerHTML = "You are a SUPER shopper!";
			shopperStatus.style.color = "blue";
		}
		else
		{
			shopperStatus.innerHTML = "You are an ELITE shopper!";
			shopperStatus.style.color = "green";
		}
	}
}

//*******Chapter 11: Creating Dynamic HTML*******
function Promo(browserCompatibility){
	var compatibleBrower = browserCompatibility;
	var halfOfBrowser;
	
	if(compatibleBrower == true)
	{
		halfOfBrowser = (window.innerWidth / 2);
	}
	else
	{
		halfOfBrowser = (document.documentElement.clientWidth / 2);
	}
	
	var centerPosition = halfOfBrowser - 200;
	var promo = document.getElementById("adPromo");
	
	//Positions the promo:
	promo.style.left = centerPosition + "px";
	promo.style.display = "block";
	
	//Closes the promo after user clicks the x
	var exitPromo = document.getElementById("closePromo");
	exitPromo.onclick = function() {
	
	promo.style.display = "none";
	};
}

function checkBrowser(){
	
	//Add buttons:
	var addItem1 = document.getElementById("addItem1");
	var addItem2 = document.getElementById("addItem2");
	var addItem3 = document.getElementById("addItem3");
	var addItem4 = document.getElementById("addItem4");
	var addItem5 = document.getElementById("addItem5");

	//if browser is compatible with W3C DOM
	if(document.getElementById)
	{	
		//Call Promo() to display the promo:
		Promo(true);
		
		//EventListeners for all the add buttons:
		addItem1.addEventListener("click", function(){addItem(document.getElementById("itm1").rowIndex)});
		addItem2.addEventListener("click", function(){addItem(document.getElementById("itm2").rowIndex)});
		addItem3.addEventListener("click", function(){addItem(document.getElementById("itm3").rowIndex)});
		addItem4.addEventListener("click", function(){addItem(document.getElementById("itm4").rowIndex)});
		addItem5.addEventListener("click", function(){addItem(document.getElementById("itm5").rowIndex)});
	}
	//if browser is not compatible, the promo will not display:
	else
	{
		Promo(false);
		addItem1.attachEvent("onclick", function(){addItem(document.getElementById("itm1").rowIndex)});
		addItem2.attachEvent("onclick", function(){addItem(document.getElementById("itm2").rowIndex)});
		addItem3.attachEvent("onclick", function(){addItem(document.getElementById("itm3").rowIndex)});
		addItem4.attachEvent("onclick", function(){addItem(document.getElementById("itm4").rowIndex)});
		addItem5.attachEvent("onclick", function(){addItem(document.getElementById("itm5").rowIndex)});
	}
		
}
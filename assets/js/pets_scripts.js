// Filename: pets_script.js
// Remarks: The entirety of this Javascript file is for demo, experimentation or testing usage purposes.
// Date: 10/12/2024

let email = "";
let password = "";
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(); // Instantiate a new Date object.
const now = new Date();
const currentDateTime = now.toLocaleString();
let day = weekday[d.getDay()]; // Requests for service to determine and retrieve the current weekday.

let prod_image = "";
let prod_name = "";
let prod_price = "";
let prod_quantity = "";
let prod_total_cost = "";
let cartSubTotal = "";
let cartGrandTotal = "";

const getEmail =() => 
{
   email = document.getElementById("txtEmail").value;
} // End of const getEmail =()

const getPassword =() => 
{    
   password = document.getElementById("txtPassword").value;
} // End of const getPassword =()

const displayRegInfo =() => 
{
   // Saves all the information in localstorage.
   // -------------------------------------------
   
      window.localStorage.setItem("user-email",email);  // User's Email
      window.localStorage.setItem("user-password",password); // User's Password

      window.location.href = "./registerinfo.html";
} // End of const displayRegInfo =()

const getWeekDayDateTime = () =>
{
  // Objective: For computing the current weekday
  // ---------------------------------------------

   document.querySelector("#currentWeekdayDateTime").textContent = day + ", " + currentDateTime; // Newer and more Flexible method/way

   // call the `updateDateTime` function every second
   
   
    setInterval(getWeekDayDateTime, 1000);
   

} // End of function getWeekDay()

const sys_signIn =() => 
{

  window.location.href="./login.html";

} // End of const sys_signIn = ()
  
const displayWishListMessage =() =>{
   alert("Your selected product item has been added to the Wishlist Successsully. ");
} // End of const displayWishListMessage =()


// *********************************************
// * PRODUCTS PURCHASE EVENT HANDLING ROUTINES *
// *********************************************

// First Product
//---------------
const captureFirstProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#firstProductImage").attributes[0].textContent // Captures first product image
   prod_name = document.getElementById("firstProductName").textContent; // Captures first product name.
   prod_price = document.getElementById("firstProductPrice").textContent; // Captures first product price.

  window.localStorage.setItem("prodImage",prod_image); // Stores first product name in localstorage.
  window.localStorage.setItem("prodName",prod_name); // Stores first product name in localstorage.
  window.localStorage.setItem("prodPrice",prod_price); // Stores first product price in localstorage.
  

 if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
 {
   window.location.href = "./productDetails.html"; // Displays information in Product Details page.
 }
 else
 {
   window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
 } // End of if-slse statement
    
} // End of const captureFirstProductInfo =()

// Second Product
// ----------------
const captureSecondProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#secondProductImage").attributes[0].textContent // Captures second product image
   prod_name = document.getElementById("secondProductName").textContent; // Captures second product name.
   prod_price = document.getElementById("secondProductPrice").textContent; // Captures second product price.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores second product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores second product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores second product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureSecondProductInfo =()

// Third Product
// --------------
const captureThirdProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#thirdProductImage").attributes[0].textContent // Captures third product image
   prod_name = document.getElementById("thirdProductName").textContent; // Captures third product name.
   prod_price = document.getElementById("thirdProductPrice").textContent; // Captures third product price.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores third product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores third product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores third product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureThirdProductInfo =()

// Fourth Product
// ---------------
const captureFourthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#fourthProductImage").attributes[0].textContent // Captures fourth product image
   prod_name = document.getElementById("fourthProductName").textContent; // Captures fourth product name.
   prod_price = document.getElementById("fourthProductPrice").textContent; // Captures fourth product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores fourth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fourth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fourth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureFourthProductInfo =()

// Fifth Product
// --------------
const captureFifthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#fifthProductImage").attributes[0].textContent // Captures fifth product image
   prod_name = document.getElementById("fifthProductName").textContent; // Captures fifth product name
   prod_price = document.getElementById("fifthProductPrice").textContent; // Captures fifth product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores fifth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fifth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fifth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureFifthProductInfo =()

// Sixth Product
// --------------
const captureSixthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#sixthProductImage").attributes[0].textContent // Captures xixth product image
   prod_name = document.getElementById("sixthProductName").textContent; // Captures sixth product name
   prod_price = document.getElementById("sixthProductPrice").textContent; // Captures sixth product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores sixth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores sixth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores sixth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureSixthProductInfo =()

// Seventh Product
// ----------------
const captureSeventhProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#seventhProductImage").attributes[0].textContent // Captures seventh product image
   prod_name = document.getElementById("seventhProductName").textContent; // Captures seventh product name
   prod_price = document.getElementById("seventhProductPrice").textContent; // Captures seventh product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores seventh product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores seventh product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores seventh product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
} // End of const captureSeventhProductInfo =()

// Eighth Product
// -----------------
const captureEighthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#eighthProductImage").attributes[0].textContent // Captures eighth product image
   prod_name = document.getElementById("eighthProductName").textContent; // Captures eighth product name
   prod_price = document.getElementById("eighthProductPrice").textContent; // Captures eighth product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores eighth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureEighthProductInfo =()

// Nineth Product
// -----------------
const captureNinethProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#ninethProductImage").attributes[0].textContent // Captures nineth product image
   prod_name = document.getElementById("ninethProductName").textContent; // Captures nineth product name
   prod_price = document.getElementById("ninethProductPrice").textContent; // Captures nineth product price
 
   window.localStorage.setItem("prodImage",prod_image); // Stores nineth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores nineth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores nineth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureNinethProductInfo =()

// Tenth Product
// -----------------
const captureTenthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#tenthProductImage").attributes[0].textContent // Captures tenth product image
   prod_name = document.getElementById("tenthProductName").textContent; // Captures eighth product name
   prod_price = document.getElementById("tenhthProductPrice").textContent; // Captures eighth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores tenth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureTenthProductInfo =()

// Eleventh Product
// -----------------
const captureEleventhProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#eleventhProductImage").attributes[0].textContent // Captures eleventh product image
   prod_name = document.getElementById("eleventhProductName").textContent; // Captures eleventh product name
   prod_price = document.getElementById("eleventhProductPrice").textContent; // Captures eleventh product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores eleventh product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores eleventh product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores eleventh product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureEleventhProductInfo =()

// Twelveth Product
// -----------------
const captureTwelvethProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#twelvethProductImage").attributes[0].textContent // Captures twelveth product image
   prod_name = document.getElementById("twelvethProductName").textContent; // Captures twelveth product name
   prod_price = document.getElementById("twelvethProductPrice").textContent; // Captures twelveth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores twelveth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores twelveth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores twelveth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureTwelvethProductInfo =()

// Thirdteenth Product
// -----------------
const captureThirdteenthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#thirdteenthProductImage").attributes[0].textContent // Captures thirdteenth product image
   prod_name = document.getElementById("thirdteenthProductName").textContent; // Captures thirdteenth product name
   prod_price = document.getElementById("thirdteenthProductPrice").textContent; // Captures thirdteenth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores thirdteenth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores thirdteenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores thirdteenth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement


} // End of const captureThirdteenthProductInfo =()

// Fourteenth Product
// -----------------
const captureFourteenthProductInfo =(productDisplayMode) => {

  prod_image = document.querySelector("#fourteenthProductImage").attributes[0].textContent // Captures fourteenth product image
  prod_name = document.getElementById("fourteenthProductName").textContent; // Captures fourteenth product name
  prod_price = document.getElementById("fourteenthProductPrice").textContent; // Captures fourteenth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores fourteenth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fourteenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fourteenth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureFourteenthProductInfo =()

// Fifteenth Product
// -----------------
const captureFifthteenthProductInfo =(productDisplayMode) => {

  prod_image = document.querySelector("#fifthteenthProductImage").attributes[0].textContent // Captures fifthteenth product image
  prod_name = document.getElementById("fifthteenthProductName").textContent; // Captures fifthteenth product name
  prod_price = document.getElementById("fifthteenthProductPrice").textContent; // Captures fifthteenth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores fifteenth product image in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fifteenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fifteenth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureFifthteenthProductInfo =()

//  Sixteenth Product
// -----------------
const captureSixteenthProductInfo =(productDisplayMode) => {

   prod_image = document.querySelector("#sixteenthProductImage").attributes[0].textContent // Captures sixteenth product image
   prod_name = document.getElementById("sixteenthProductName").textContent; // Captures sixteenth product name
   prod_price = document.getElementById("sixteenthProductPrice").textContent; // Captures sixteenth product price
 
   window.localStorage.setItem("prodName",prod_image); // Stores sixteenth product image in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores sixteenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores sixteenth product price in localstorage.

   if(productDisplayMode === "ProductDetail") // If the display mode is "Product Detail"
   {
     window.location.href = "./productDetails.html"; // Displays information in Product Details page.
   }
   else
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of const captureSixteenthProductInfo =()

const captureProductImage =() => {
 
   let prod_image = document.querySelector("#picProductImage").attributes[1].textContent // Captures sixteenth product name
   // console.log(document.getElementById('imgPreview').attributes[1].textContent);
   alert("Product Image Path: " + prod_image);
} // End of const captureProductImage =()

const updateProductDetails =() => {

 // Objective: Update the selected product with the detailed information
 // ---------------------------------------------------------------------

  // document.querySelector("#product_image_details").innerText = window.localStorage.getItem("prodImage");  
   document.querySelector("#product_title_details").innerText = window.localStorage.getItem("prodName");
   document.querySelector("#product_price_details").innerText = window.localStorage.getItem("prodPrice");

} // End of const updateProductDetails =()

const displayShoppingCart =() => {

   // Objective: Display the list of purchased products information inside the shopping cart.
   // ----------------------------------------------------------------------------------------
      document.querySelector("#tblProductImage").innerText = window.localStorage.getItem("prodImage"); 
      document.querySelector("#tblProductName").innerText = window.localStorage.getItem("prodName");
      document.querySelector("#tblProductPrice").innerText = window.localStorage.getItem("prodPrice");
      document.querySelector("#tblProductTotalCost").innerText = window.localStorage.getItem("prodPrice");
      document.querySelector("#lblCartSubTotal").innerText = window.localStorage.getItem("prodPrice");
      document.querySelector("#lblCartGrandTotal").innerText = window.localStorage.getItem("prodPrice");

   // For Dropdown Product Cart List
   // -------------------------------
        document.querySelector("#drpDwnProductName").innerText =  window.localStorage.getItem("prodName");
        document.querySelector("#drpDwnProductPrice").innerText =  window.localStorage.getItem("prodPrice");
        document.querySelector("#drpDwnFooterProductPrice").innerText =  window.localStorage.getItem("prodPrice");
      
  } // End of const updateShoppingCart =()
  
  const updateShoppingCart =(quantityOperation) => 
  {
   // Objective: For updating the quantity and total computed purchase amount in the shopping cart.
   // -----------------------------------------------------------------------------------------------
      document.querySelector("#tblProductTotalCost").innerText = window.localStorage.getItem("prodPrice");
      
      // Computation of updated total cost value    
      // ----------------------------------------
      prod_quantity = document.querySelector("#txtProductQuantity").value; // Extracts the default quantity value.
      prod_quantity = Number(prod_quantity); // Converts the product quantity to another data type.
      
      prod_price = document.querySelector("#tblProductPrice").innerText.toString();
      prod_price = Number(prod_price.slice(1,prod_price.length));

      if(quantityOperation === "Plus")
      {
         prod_quantity+=1;
      }
      else
      {
        prod_quantity-=1;
      } // End of if-else statement

      prod_total_cost = prod_quantity * prod_price
      prod_total_cost = "$" + prod_total_cost.toFixed(2).toString();

      document.querySelector("#tblProductTotalCost").innerText = prod_total_cost;
      document.querySelector("#lblCartSubTotal").innerText = document.querySelector("#tblProductTotalCost").innerText;
      document.querySelector("#lblCartGrandTotal").innerText = document.querySelector("#tblProductTotalCost").innerText;

     // Saves the comuputed Grand Total price in localstorage
     // ------------------------------------------------------
        window.localStorage.setItem("prodGrandTotal", prod_total_cost);

  } // End of const updateShoppingCart =()

  const updateCheckout =() => 
  {
    // Objective: Provide and upate the actually total product purchases expenditure at Checkout page.
    // ------------------------------------------------------------------------------------------------
   
    document.querySelector("#tblCheckoutProductName").innerText = window.localStorage.getItem("prodName");
    document.querySelector("#tblCheckoutProductPrice").innerText = window.localStorage.getItem("prodGrandTotal");
    document.querySelector("#tblCheckoutSubTotal").innerText = window.localStorage.getItem("prodGrandTotal");
    document.querySelector("#tblCheckoutGrandTotal").innerText = window.localStorage.getItem("prodGrandTotal");
    
  } // End of const updateCheckout =()
// ************************************************************************************************************
// * Filename: pets_script.js                                                                                 *
// * Objective: Provides the functionality to support the entire website event handling operations.           *
// * Remarks: Generation SG Fullstack Development Capstone Project                                            *
// * Developer: Michael Tan Kok Liang                                                                         *
// * Date: 10/12/2024                                                                                         *
// ************************************************************************************************************

// [GLOBAL VARIABLES]
//--------------------

// [DATE AND TIME]
// ---------------
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(); // Instantiate a new Date object.
const now = new Date();
const currentDateTime = now.toLocaleString();
let day = weekday[d.getDay()]; // Requests for service to determine and retrieve the current weekday.

// [USER ACCOUNT]
// ---------------
let name = "";
let email = "";
let password = "";

// [PRODUCTS]
// ----------
let prod_image = "";
let prod_name = "";
let prod_price = "";
let prod_quantity = "";
let prod_total_cost = "";
let cartSubTotal = "";
let cartGrandTotal = "";


// ***************************
// * DATE AND TIME OPERATION *
// ***************************

function getWeekDayDateTime()
{
  // Objective: For computing the current weekday
  // ---------------------------------------------

   document.querySelector("#currentWeekdayDateTime").textContent = day + ", " + currentDateTime; // Newer and more Flexible method/way

   // call the `updateDateTime` function every second
   
    setInterval(getWeekDayDateTime, 1000); // Periodically updates the time at every 1 second interval
   
} // End of function getWeekDay()

// ***************************
// * USER ACCOUNT MANAGEMENT *
// ***************************

function getName() 
{
  // Objective: Receives the provided name data.
  // --------------------------------------------
     name = document.getElementById("txtSignUpName").value;
} // End of function getEmail()

function getName() 
{
  // Objective: Receives the provided name information data.
  // -------------------------------------------------------
     name = document.getElementById("txtProfileName").value;
} // End of function getEmail()

function getEmail() 
{
  // Objective: Receives the provided email information data.
  // ---------------------------------------------------------
   email = document.getElementById("txtSignUpEmail").value;
} // End of function getEmail()

function getPassword() 
{    
  // Objective: Receives the provided password information data.
  // ------------------------------------------------------------
     password = document.getElementById("txtSignUpPassword").value;
} // End of function getPassword()

function getContact() 
{
  // Objective: Receives the provided contact information data.
  // ----------------------------------------------------------
     name = document.getElementById("txtProfileContact").value;
} // End of function function getContact() 

function displayRegInfo()
{
   // Objective: Displays user's registered email and password information
   // ----------------------------------------------------------------------
   
      window.localStorage.setItem("user-email",email);  // User's Email
      window.localStorage.setItem("user-password",password); // User's Password

      window.location.href = "./registerInfo.html";
} // End of function displayRegInfo()

function sys_signIn()
{
 // Objective: For navigating to the login page after successful sign-in
 // ------------------------------------------------------------------------

    window.location.href="./login.html";

} // End of function sys_signIn()

function getLoginStatus()
{
 // Objective: Reads the login status from Web browser memory and displays the login/logout link accordingly
 // ----------------------------------------------------------------------------------------------------------
    loginStatus = window.localStorage.getItem('_loginState');

    if(loginStatus === "success")
    {
      document.querySelector("#lnkLogin").textContent = "Logout"; // Displays the Logout Link.
    }
    else
    {
      document.querySelector("#lnkLogin").textContent = "Login"; // Displays the Login Link.
    } // End of if-else statement
  
} // End of function getLoginStatus()

function updateLoginStatus(loginMode)
{
  
 // Objective: Stores the login state based on the current login status (Login State: SUCCESS:Logout; FAILED:Login) 
 // ----------------------------------------------------------------------------------------------------------------

   if(loginMode === "success")
   {
     window.localStorage.setItem("_loginState","success"); // Change the link to Logout, if sign-in is succesful.
     // window.location.replace("./logout.html"); // Changes the Login link to logout link.
     window.location.href = "./accountDashboard.html";
   }
   else
   {
    window.localStorage.setItem("_loginState","failed"); // Otherwise remain as it is.    
    window.location.replace("./login.html"); // Reverts back to the login page again for re-entry
   } // End of if-else statement

  
} // End of function updateLoginStatus()

function loginSuccessRoute(userMode)
{
// Objective: To display the appropriate login message based on the user mode login -> based on User Mode
// -------------------------------------------------------------------------------------------------------
  
  if(userMode === "customer")
    {
     window.location.href = "./loginSuccess.html";
    }
    else
    {
     window.location.href = "loginAdminSuccess.html";
    } // End of if-else statement

    document.querySelector("#lnkLogin").textContent = "Logout";

} // End of   function loginSuccessRoute(userMode)

function loginFailedRoute(userMode)
{
// Objective: For routing back to the login page for failed login attempt. -> based on User Mode
// -----------------------------------------------------------------------------------------------

alert("Login Failed. Please Try Again.");

 if(userMode === "customer")
 {
  window.location.href = "./login.html";
 }
 else
 {
  window.location.href = "./loginAdmin.html";
 } // End of if-else statement

 document.querySelector("#lnkLogin").textContent = "Login";

} // End of function loginFailedRoute(userMode)

function signUpSuccessRoute(userMode)
{
// Objective: For routing back to the sign-up page for successful registration attempt -> based on User Mode
// -----------------------------------------------------------------------------------------------------------

  if(userMode === "customer")
  {
    window.location.href = "./login.html";
  }
  else
  {
    window.location.href = "./loginAdmin.html";
  } // End of if-else statement

  document.querySelectorAll("#lnkLogin").textContent = "Login";

} // End of function signUpSuccessRoute(userMode)
  
function signUpFailedRoute(userMode)
{
// Objective: For routing back to the sign-up page for failed registration attempt -> based on User Mode
// -------------------------------------------------------------------------------------------------------

  if(userMode === "customer")
  {
    window.location.href = "./signUp.html";
  }
  else
  {
    window.location.href = "./signUpAdmin.html";
  } // End of if-else statement

  document.querySelectorAll("#lnkLogin").textContent = "Login";

} // End of function signUpFailedRoute(userMode)
  
function displayWishListMessage()
{
 // Objective: Displays the product Wishlist messasge
 // --------------------------------------------------

   alert("Your selected product item has been added to the Wishlist Successsully. ");
} // End of const displayWishListMessage =()

// *********************************************
// * PRODUCTS PURCHASE EVENT HANDLING ROUTINES *
// *********************************************

// First Product
//---------------
function captureFirstProductInfo(productDisplayMode)
{
  // Objective: Extracts the first listed product's posted information on the Products Listing page.
  // ------------------------------------------------------------------------------------------------

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
 else // Alternative: Add To Cart Mode
 {
   window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
 } // End of if-slse statement
    
} // End of function captureFirstProductInfo()

// Second Product
// ----------------
function captureSecondProductInfo(productDisplayMode)
{
// Objective: Extracts the second listed product's posted information on the Products Listing page.
// ------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureSecondProductInfo()

// Third Product
// --------------
function captureThirdProductInfo(productDisplayMode)
{
 // Objective: Extracts the third listed product's posted information on the Products Listing page.
 // ------------------------------------------------------------------------------------------------
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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureThirdProductInfo()

// Fourth Product
// ---------------
function captureFourthProductInfo(productDisplayMode)
{
  // Objective: Extracts the fifth listed product's posted information on the Products Listing page.
  // -----------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureFourthProductInfo()

// Fifth Product
// --------------
function captureFifthProductInfo(productDisplayMode)
{
// Objective: Extracts the fifth listed product's posted information on the Products Listing page.
// -----------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureFifthProductInfo()

// Sixth Product
// --------------
function captureSixthProductInfo(productDisplayMode)
{
// Objective: Extracts the sixth listed product's posted information on the Products Listing page.
// ------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureSixthProductInfo()

// Seventh Product
// ----------------
function captureSeventhProductInfo(productDisplayMode) 
{
// Objective: Extracts the seventh listed product's posted information on the Products Listing page.
// --------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of const captureSeventhProductInfo =()

// Eighth Product
// ----------------
function captureEighthProductInfo(productDisplayMode)
{
// Objective: Extracts the eighth listed product's posted information on the Products Listing page.
// -------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureEighthProductInfo()

// Nineth Product
// ---------------
function captureNinethProductInfo(productDisplayMode)
{
// Objective: Extracts the ninth listed product's posted information on the Products Listing page.
// ------------------------------------------------------------------------------------------------
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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureNinethProductInfo()

// Tenth Product
// ---------------
function captureTenthProductInfo(productDisplayMode)
{
  // Objective: Extracts the tenth listed product's posted information on the Products Listing page.
  // ------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureTenthProductInfo()

// Eleventh Product
// -----------------
function captureEleventhProductInfo(productDisplayMode)
{
  // Objective: Extracts the eleventh listed product's posted information on the Products Listing page.
  // ---------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureEleventhProductInfo()

// Twelveth Product
// -----------------
function captureTwelvethProductInfo(productDisplayMode)
{
 // Objective: Extracts the twelveth listed product's posted information on the Products Listing page.
 // --------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureTwelvethProductInfo()

// Thirdteenth Product
// -------------------
function captureThirdteenthProductInfo(productDisplayMode)
{
 // Objective: Extracts the thirdteenth listed product's posted information on the Products Listing page.
 // ------------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureThirdteenthProductInfo()

// Fourteenth Product
// -------------------
function captureFourteenthProductInfo(productDisplayMode) 
{
 // Objective: Extracts the fourteenth listed product's posted information on the Products Listing page.
 // ----------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureFourteenthProductInfo()

// Fifteenth Product
// -----------------
function captureFifthteenthProductInfo(productDisplayMode)
{
 // Objective: Extracts the fifteenth listed product's posted information on the Products Listing page.
 // ---------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement

} // End of function captureFifthteenthProductInfo()

//  Sixteenth Product
// -----------------
function captureSixteenthProductInfo(productDisplayMode)
{
 // Objective: Extracts the sixteenth listed product's posted information on the Products Listing page.
 // ---------------------------------------------------------------------------------------------------

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
   else // Alternative: Add To Cart Mode
   {
     window.location.href = "./addToCart.html"; // Displays information in the Add To Cart page.
   } // End of if-slse statement
   
} // End of function captureSixteenthProductInfo()

function captureProductImage()
{

// Objective: For capturing the exact absolute path of the current image in use.
// -------------------------------------------------------------------------------
   let prod_image = document.querySelector("#picProductImage").attributes[1].textContent // Captures sixteenth product name
   alert("Product Image Path: " + prod_image);
} // End of const captureProductImage =()

function updateProductDetails()
{

 // Objective: Update the selected product with the detailed information
 // ---------------------------------------------------------------------
   document.querySelector("#product_title_details").innerText = window.localStorage.getItem("prodName");
   document.querySelector("#product_price_details").innerText = window.localStorage.getItem("prodPrice");
 
} // End of const updateProductDetails =()

function displayShoppingCart()  // Targets Add to Cart page
{
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
      
  } // End of function displayShoppingCart()
  
  function updateShoppingCart(quantityOperation) // Targets Add to Cart page
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

  } // End of function updateShoppingCart()

  function updateCheckout()
  {
    // Objective: Provide and upate the actually total product purchases expenditure at Checkout page.
    // ------------------------------------------------------------------------------------------------
   
    document.querySelector("#tblCheckoutProductName").innerText = window.localStorage.getItem("prodName");
    document.querySelector("#tblCheckoutProductPrice").innerText = window.localStorage.getItem("prodGrandTotal");
    document.querySelector("#tblCheckoutSubTotal").innerText = window.localStorage.getItem("prodGrandTotal");
    document.querySelector("#tblCheckoutGrandTotal").innerText = window.localStorage.getItem("prodGrandTotal");
    
  } // End of function updateCheckout()

  // ******************************
  // * ACCOUNTS PROFILE DASHBOARD *
  // ******************************
  function displayDashboard()
  {
   // Objective: For displaying the various features of the user account profile dashboard.
   // --------------------------------------------------------------------------------------
      
    // JavaScript for navigation and profile image upload.
    // ====================================================
    
    document.querySelectorAll('.nav-link[data-target]').forEach(link => 
     {
        link.addEventListener('click', function () {
          document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
          document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
  
          this.classList.add('active');
          document.getElementById(this.getAttribute('data-target')).classList.add('active');
        });
      });
  
      document.getElementById("imageUpload").addEventListener("change", function () 
      {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            document.getElementById("profile-image").src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
  
      // Simulate fetching username dynamically.
      // ---------------------------------------
         const username = "Somename"; // Replace this with actual user data
         document.getElementById("username").textContent = username; // Dynamically Assigned.   

  } // End of function displayDashboard()

  // ***************************
  // * ADMINISTRATOR DASHBOARD *
  // ***************************

  function updateCategory()
  {
   // Objective: For updating the current product category's data.
   // ------------------------------------------------------------

      alert("Current Product Category data is Updated Successfully. ");

  } // End of function updateCategory()

  function deleteCategory()
  {
   // Objective: For deleting the current product category's data.
   // ------------------------------------------------------------

    // Prompts user for choice.
    // -------------------------    
      let _deleteCategoryRequest = confirm("Confirm Delete current Product Category Data?");

    // Obtains user's response
    // ------------------------ 
     if(_deleteCategoryRequest)    
      {
        alert("Current Product Category data is Deleted Successfully.");
      }
      else
      {
        alert("No Action Taken.");
      } // End of if-else statement

  } // End of function deleteCategory()


  function updateProduct()
  {
   // Objective: For updating the current product information's data.
   // ---------------------------------------------------------------

      alert("Current Product Information data is Updated Successfully. ");

  } // End of function updateProduct()

  function deleteProduct()
  {
   // Objective: For deleting the current product information's data.
   // ---------------------------------------------------------------

   // Prompts user for choice.
   // -------------------------   
      let _deleteProductRequest = confirm("Confirm Delete current Product Information Data?");

    // Obtains user's response
    // ------------------------
       if(_deleteProductRequest)    
        {
          alert("Current Product Information data is Deleted Successfully.");
        }
        else
        {
          alert("No Action Taken.");
        } // End of if-else statement

  } // End of function deleteProduct()

  // ********************************************
  // * PRODUCTS PURCHASE TRANSACTION MANAGEMENT *
  // ********************************************
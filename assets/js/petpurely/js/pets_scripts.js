
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

// [CUSTOMERS/USERS]
// -----------------
function getLoginName() 
{
  // Objective: Receives the provided login name data.
  // -------------------------------------------------
     let _loginName = document.getElementById("txtLoginName").value;
     window.localStorage.setItem("loginName",_loginName); // Stores the login name.

} // End of function getLoginName

function getSignUpName() 
{
  // Objective: Receives the provided signup name information data.
  // ---------------------------------------------------------------
     let _signUpName = document.getElementById("txtSignUpName").value;
     window.localStorage.setItem("signUpName", _signUpName); // Stores the login name.
} // End of function getSignUpName()

function getLoginEmail() 
{
  // Objective: Receives the provided login email information data.
  // --------------------------------------------------------------
     let _loginEmail = document.getElementById("txtLoginEmail").value;
     window.localStorage.setItem("loginEmail",_loginEmail); // Stores the login email.

} // End of function getLoginEmail()

function getSignUpEmail() 
{
  // Objective: Receives the provided signUp email information data.
  // ---------------------------------------------------------------
     let _signUpEmail = document.getElementById("txtSignUpEmail").value;
     window.localStorage.setItem("signUpEmail", _signUpEmail); // Stores the signUp email.

} // End of function getLoginEmail()

function getLoginPassword() 
{    
  // Objective: Receives the provided login password information data.
  // ------------------------------------------------------------------

       let _loginPassword = document.getElementById("txtLoginPassword").value;
       window.localStorage.setItem("loginPassword",_loginPassword); // Stores the login password.
   
} // End of function getLoginPassword()

function getSignUpPassword() 
{    
  // Objective: Receives the provided signup password information data.
  // ------------------------------------------------------------------
     let _signUpPassword = document.getElementById("txtSignUpPassword").value;
     window.localStorage.setItem("signUpPassword", _signUpPassword); // Stores the signUp password.
} // End of function getSignUpPassword()

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

function displayLoginName()
{
  // [LOGIN NAME]
  // ------------
     let loginProfileName =  window.localStorage.getItem("loginName"); 
     loginProfileName = loginProfileName.toLowerCase(); // Change all the data value to lowercase.
     
  // [LOGIN PICTURE]
  // ------------------   
     let imgSource1 = document.querySelector("#account-image");

 if((loginProfileName === "admin") || (loginProfileName === "administrator"))
 {
   imgSource1.src = "./assets/images/Admin_Profile_Picture.png"; // Displays Administrator Profile Picture
 }
 else // For non-administrator login
 {
   // imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
   imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
   // imgSource1.src = "./assets/images/Customer_Profile_Picture_1a.png"; // Displays Customer Profle Picture
 } // End of if-else statement

} // End of function displayLoginName()

function displayProfileName()
{
// Objective: For displaying the logged in username at the My Accounts Dashboard.
// -------------------------------------------------------------------------------
  
// [PROFILE NAME]
// ---------------
   let loginProfileName =  window.localStorage.getItem("loginName"); 
   loginProfileName = loginProfileName.toLowerCase(); // Change all the data value to lowercase.
   document.querySelector("#dvUsername").innerText = loginProfileName; // Displaye the stored login name.

// [PROFILE PICTURE]
// ------------------   
   let imgSource2 = document.querySelector("#profile-image");
   
   if((loginProfileName === "admin") || (loginProfileName === "administrator"))
    {
      imgSource2.src = "./assets/images/Admin_Profile_Picture.png"; // Displays Administrator Profile Picture
    }
    else // For non-administrator login
    {
      // imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
      imgSource2.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
      // imgSource2.src = "./assets/images/Customer_Profile_Picture_1a.png"; // Displays Customer Profle Picture
      document.getElementById("categoryLink").style.display = 'none';
      document.getElementById("productLink").style.display = 'none'; 
      
      document.getElementById("categoryLink").removeAttribute("enabled","");
      document.getElementById("categoryLink").setAttribute("disabled","");
      
      document.getElementById("productLink").removeAttribute("enabled","");
      document.getElementById("productLink").setAttribute("disabled",""); // Disables the Product Hyperlink.
            

    } // End of if-else statement
   
} // End of function displayProfileName()

function verify_signIn()
{
 // Objective: For verification of the provided crentials. (Customer Mode)
 // -------------------------------------------------------

    let signInUsername = window.localStorage.getItem("loginName");
    let signInPassword = window.localStorage.getItem("loginPassword");
    
    if((signInUsername !== "admin") && (signInPassword === "123456")) // Pre-defined user password: 123456
    {
      window.location.href="./loginSuccess.html";
    }
    else
    { 
      window.location.href="./loginFailed.html";
    } // End of if-else statement

} // End of function verify_signIn()

// [ADMINISTRATORS]
// -----------------
function getAdminLoginName() 
{
  // Objective: Receives the provided login name data.
  // -------------------------------------------------
     let _loginName = document.getElementById("txtAdminLoginName").value;
     window.localStorage.setItem("loginName",_loginName); // Stores the login name.

} // End of function getAdminLoginName

function getAdminSignUpName() 
{
  // Objective: Receives the provided signup name information data.
  // ---------------------------------------------------------------
     let _signUpName = document.getElementById("txtAdminSignUpName").value;
     window.localStorage.setItem("signUpName", _signUpName); // Stores the login name.
} // End of function getAdminSignUpName()

function getAdminLoginEmail() 
{
  // Objective: Receives the provided login email information data.
  // --------------------------------------------------------------
     let _loginEmail = document.getElementById("txtAdminLoginEmail").value;
     window.localStorage.setItem("loginEmail",_loginEmail); // Stores the login email.

} // End of function getAdminLoginEmail()

function getAdminSignUpEmail() 
{
  // Objective: Receives the provided signUp email information data.
  // ---------------------------------------------------------------
     let _signUpEmail = document.getElementById("txtAdminSignUpEmail").value;
     window.localStorage.setItem("signUpEmail", _signUpEmail); // Stores the signUp email.

} // End of function getLoginEmail()

function getAdminLoginPassword() 
{    
  // Objective: Receives the provided login password information data.
  // ------------------------------------------------------------------
     let _loginPassword = document.getElementById("txtAdminPassword").value;
     window.localStorage.setItem("loginPassword",_loginPassword); // Stores the login password.

} // End of function getAdminLoginPassword()

function getAdminSignUpPassword() 
{    
  // Objective: Receives the provided signup password information data.
  // ------------------------------------------------------------------
     let _signUpPassword = document.getElementById("txtAdminSignUpPassword").value;
     window.localStorage.setItem("signUpPassword", _signUpPassword); // Stores the signUp password.
} // End of function getAdminSignUpPassword()

function getAdminContact() 
{
  // Objective: Receives the provided contact information data.
  // ----------------------------------------------------------
     name = document.getElementById("txtAdminProfileContact").value;
} // End of function function getAdminContact() 

function displayAdminLoginName()
{
  // [LOGIN NAME]
  // ------------
     let loginProfileName =  window.localStorage.getItem("loginName"); 
     loginProfileName = loginProfileName.toLowerCase(); // Change all the data value to lowercase.
     
  // [LOGIN PICTURE]
  // ------------------   
     let imgSource1 = document.querySelector("#account-image");

 if((loginProfileName === "admin") || (loginProfileName === "administrator"))
 {
  document.getElementById("categoryLink").style.display = 'block';
  document.getElementById("productLink").style.display = 'block'; 
  imgSource1.src = "./assets/images/Admin_Profile_Picture.png"; // Displays Administrator Profile Picture
    
 }
 else // For non-administrator login
 {
   // imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
   imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
   // imgSource1.src = "./assets/images/Customer_Profile_Picture_1a.png"; // Displays Customer Profle Picture
 } // End of if-else statement

} // End of function displayAdminLoginName()

function displayAdminProfileName()
{
// Objective: For displaying the logged in username at the My Accounts Dashboard.
// -------------------------------------------------------------------------------
  
// [PROFILE NAME]
// ---------------
   let loginProfileName =  window.localStorage.getItem("loginName"); 
   loginProfileName = loginProfileName.toLowerCase(); // Change all the data value to lowercase.
   document.querySelector("#dvUsername").innerText = loginProfileName; // Displaye the stored login name.

// [PROFILE PICTURE]
// ------------------   
   let imgSource2 = document.querySelector("#profile-image");
   
   if((loginProfileName === "admin") || (loginProfileName === "administrator"))
    {
      imgSource2.src = "./assets/images/Admin_Profile_Picture.png"; // Displays Administrator Profile Picture
    }
    else // For non-administrator login
    {
      // imgSource1.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
      imgSource2.src = "./assets/images/Customer_Profile_Picture.png"; // Displays Customer Profle Picture
      // imgSource2.src = "./assets/images/Customer_Profile_Picture_1a.png"; // Displays Customer Profle Picture
    } // End of if-else statement
   
} // End of function displayAdminProfileName()

function verify_admin_signIn()
{
 // Objective: For verification of the provided crentials. (Administrator Mode)
 // -------------------------------------------------------

  let signInUsername = window.localStorage.getItem("loginName");
  let signInPassword = window.localStorage.getItem("loginPassword");
    
 if((signInUsername === "admin") && (signInPassword === "Admin@1234"))
 {
   window.location.href = "./loginAdminSuccess.html";
 }
 else
 {
   window.location.href = "./loginAdminFailed.html";
 } // End of if-else statement

} // End of function verify_admin_signIn()

function updateLoginLogoutState()
{
// Objective: Clears all Web Browsers Storage variables and navigate to the appropriate page accordingly.
// -------------------------------------------------------------------------------------------------------
    
   window.localStorage.clear(); // Requests for service to clear all localstorage web brower's variables.
   window.sessionStorage.clear(); // Requests for service to clear all sessionstorage web brower's variables. 
   window.location.href = "./login.html";
   
} // End of function setLoginLogoutState()

function getLoginStatus()
{
 // Objective: Reads the login status from Web browser memory and displays the login/logout link accordingly
 // ----------------------------------------------------------------------------------------------------------
   
   // window.localStorage.setItem("_loginState","success"); // Change the link to Logout, if sign-in is succesful.   
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

function updateLoginStatus(loginState)
{
  
 // Objective: Stores the login state based on the current login status (Login State: SUCCESS:Logout; FAILED:Login) 
 // ----------------------------------------------------------------------------------------------------------------

   if(loginState === "success")
   {
     window.location.href = "./logout.html";  
   }
   else
   {
      window.location.href = "./login.html";         
   } // End of if-else statement

} // End of function updateLoginStatus()

function loginSuccessRoute(userMode)
{
// Objective: To display the appropriate login message based on the user mode login -> based on User Mode
// -------------------------------------------------------------------------------------------------------
  
  if(userMode === "customer") // For Customer Mode
    {
     window.location.href = "./loginSuccess.html";
    }
    else // For Administrator Mode
    {
     window.location.href = "./loginAdminSuccess.html";
    } // End of if-else statement

    document.querySelector("#lnkLogin").textContent = "Logout";

} // End of   function loginSuccessRoute(userMode)

function loginFailedRoute(userMode)
{
// Objective: For routing back to the login page for failed login attempt. -> based on User Mode
// -----------------------------------------------------------------------------------------------

 if(userMode === "customer") // For Customer Mode
 {
  window.location.href = "./login.html";
 }
 else // For Administrator Mode
 {
  window.localStorage.removeItem("loginPassword");
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
  
function dashboardRoute(profileUser)
{
// Objective: Performs routing of dashboard routes based on logged in user profile.
// ----------------------------------------------------------------------------------
   if((profileUser === "admin") || (profileUser === "Admin") || (profileUser === "administrator") || (profileUser === "Administrator"))
    {
       window.location.href="./admin-account1.html";
    } // End of if statement

} // End of function dashboardRoute(profileUser)

// *********************************************
// * PRODUCTS PURCHASE EVENT HANDLING ROUTINES *
// *********************************************

function displayWishListMessage()
{
 // Objective: Displays the product Wishlist messasge
 // --------------------------------------------------

   alert("Your selected product item has been added to the Wishlist Successsully. ");
} // End of function displayWishListMessage()

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
function captureNinethProductInfo(productNum, productDisplayMode)
{
// Objective: Extracts the ninth listed product's posted information on the Products Listing page.
// ------------------------------------------------------------------------------------------------
   
  if(productNum === "9")
  {
    prod_image = document.querySelector("#ninethProductImage").attributes[0].textContent // Captures nineth product image
    prod_name = document.getElementById("ninethProductName").textContent; // Captures nineth product name
    prod_price = document.getElementById("ninethProductPrice").textContent; // Captures nineth product price
 }
 else if(productNum === "10")
 {
   prod_image = document.querySelector("#tenthProductImage").attributes[0].textContent // Captures tenth product image
   prod_name = document.getElementById("tenthProductName").textContent; // Captures tenth product name
   prod_price = document.getElementById("tenthProductPrice").textContent; // Captures tenth product price
 } // End of if-else statement

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

// Tenth Product => **Buggy / NOT WORKING 
// ---------------
function captureTenthProductInfo(productNum, productDisplayMode)
{
  // Objective: Extracts the tenth listed product's posted information on the Products Listing page.
  // ------------------------------------------------------------------------------------------------

  if(productNum === "10")
  { 
   prod_image = document.querySelector("#tenthProductImage").attributes[0].textContent // Captures tenth product image
   prod_name = document.getElementById("tenthProductName").textContent; // Captures tenth product name
   prod_price = document.getElementById("tenhthProductPrice").textContent; // Captures tenth product price
  }
   window.localStorage.setItem("prodName",prod_image); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores tenth product price in localstorage.

   alert("Navigating to the Products Details page.");

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
   prod_price = document.getElementById("eleventhProductPrice").textContent; // Captures eleventh product price*
 
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
         // const username = "Somename"; // Replace this with actual user data
         const username = window.localStorage.getItem("loginName");
         document.getElementById("dvUsername").textContent = username; // Dynamically Assigned.   

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
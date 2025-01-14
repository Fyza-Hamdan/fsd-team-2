
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

function updateLoginLogoutState(profileName)
{
// Objective: Clears all Web Browsers Storage variables and navigate to the appropriate page accordingly.
// -------------------------------------------------------------------------------------------------------
    
   window.localStorage.clear(); // Requests for service to clear all localstorage web brower's variables.
   window.sessionStorage.clear(); // Requests for service to clear all sessionstorage web brower's variables. 
   
   if(profileName !== "admin")
   {
     window.location.href = "./login.html";
   }
   else
   {
     window.location.href = "./loginAdmin.html";
   } // End of if-else statement
   
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

// Other User Account Management Function Here
// --------------------------------------------



// *********************************************
// * PRODUCTS PURCHASE EVENT HANDLING ROUTINES *
// *********************************************

function displayEmptyCart()
{
 
// Objective: For dislaying an empty Shopping Cart Information.
// -------------------------------------------------------------
  document.querySelector("#imgListCart").style.display = "none"; // Hides the product item image picture
  document.querySelector("#viewListCart").textContent = "Your PetPurely Cart is EMPTY";
  document.querySelector("#drpDwnProductQuantity").textContent = "0 x";
  document.querySelector("#drpDwnProductPrice").textContent = "0.00";
  document.querySelector("#drpDwnFooterProductPrice").textContent = "0.00";
  document.querySelector(".cart_buttons").style.display = "none"; // Hides the cart buttons.

} // End of function displayEmptyCart()

function displayCartItems()
{
  
// Objective: For displaying the Shopping Cart with all the purchased items
// --------------------------------------------------------------------------
  document.querySelector("#imgListCart").style.display = "block"; // Displays the product item image picture.
  // document.querySelector("#viewListCart").textContent = "Your PetPurely Cart is EMPTY";
  document.querySelector("#drpDwnProductQuantity").textContent = "";
  document.querySelector("#drpDwnProductPrice").textContent = "";
  document.querySelector("#drpDwnFooterProductPrice").textContent = "";
  document.querySelector(".cart_buttons").style.display = "block"; // Displays the cart buttons.

} // End of function displayCartItems()

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
   prod_weight = document.getElementById("firstProductWeight").textContent; // Captures first product weight.

   window.localStorage.setItem("prodImage",prod_image); // Stores first product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores first product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores first product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores first product weight in localstorage.
   window.localStorage.setItem("prodSKU", "DOGF1234"); // Stores the first product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Dog Food"); // Stores the first product category information in localstorage.
   window.localStorage.setItem("prodTag1","Dog Food"); // Stores the first product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Animal Food"); // Stores the first product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Food Consumable"); // Stores the first product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Dog Food Consumable"); // Stores the first product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$56.00"); // Stores the first product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","12.22% Off"); // Stores the first product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 40.00%"); // Stores the first product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 37.00%"); // Stores the first product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 5.00%"); // Stores the first product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 5.00%"); // Stores the first product GA4 information in localstorage.

   // First Product Description Content
   // ----------------------------------
   let firstProductContent = `
        <p>Reward your BFF with the delicious taste of Stella & Chewy’s Purely Pork Freeze-Dried Raw Dinner Patties Dog Food. This delectable grain-free and gluten-free recipe is crafted with freeze-dried, raw ingredients that are sustainably sourced, including 95% pork, organs and bone, plus certified organic fruits and vegetables.</p>
      
        <h5>Benefits</h5>
        <ul>
          <li>Features a single source of animal protein with 95% pork, organs and bone.</li>
          <li>Made without added hormones, antibiotics or fillers.</li>
          <li>Offers your furry friend the benefits of raw food nutrition.</li>
          <li>Complete and Balanced Diet.</li>
        </ul>

        </br>
        <h5>Facts</h5>
        <ul>
          <li><b>Breed Size:</b> All Breeds</li>
          <li><b>Life Stage:</b> All Stages</li>
          <li><b>Special Diet:</b> Gluten Free, Grain Free</li>
          <li><b>Protein:</b> Pork</li>
          <li><b>Size:</b> 397g</li>
          <li><b>Made In:</b> United States</li>
        </ul>
      `;

      // 2. Save it to localStorage:
      window.localStorage.setItem("firstProductDescription", firstProductContent);

      window.localStorage.setItem("productSelected", "firstProduct");

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
   prod_weight = document.getElementById("secondProductWeight").textContent; // Captures second product weight.

   window.localStorage.setItem("prodImage",prod_image); // Stores second product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores second product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores second product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores second product weight in localstorage.
   window.localStorage.setItem("prodSKU", "DOGT1234"); // Stores the second product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Dog Treat"); // Stores the second product category information in localstorage.
   window.localStorage.setItem("prodTag1","Dog Food"); // Stores the second product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Dog Treat"); // Stores the second product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Food Consumable"); // Stores the second product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Dog Food Consumable"); // Stores the second product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$21.50"); // Stores the second product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","34.88% Off"); // Stores the second product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 40.00%"); // Stores the second product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 37.00%"); // Stores the second product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 5.00%"); // Stores the second product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 5.00%"); // Stores the second product GA4 information in localstorage.'

  // Second Product Description Content
  // -----------------------------------
   let secondProductContent = `
        <p>Zeal Pet Food was founded in 1999 by Harjit Sidhu. Its vision is to provide a sustainable and holistic business approach in every aspect of the company.From procurement through to production, the final product, and our customers, their focus is on providing environmentally friendly consumer and production cycles.</p>
      
        <h5>Benefits</h5>
        <ul>
          <li>Wholesome, trustworthy and traceable to source. Locally sourced 100% natural ingredients.</li>
          <li>Handmade at the Auckland factory from premium New Zealand free-range meats and wild-caught seafood.</li>
          <li>Direct access to pastoral (free range/grass-fed) farming of beef, sheep, venison, and dairy.</li>
          <li>Absolutely NO colourings, flavours, additives or preservatives used in the manufacturing process.</li>
          <li>Chewing on Zeal® Pet Treat will help remove plaque and tartar.</li>
        </ul>

        </br>
        <h5>Facts</h5>
        <ul>
          <li><b>Breed Size:</b> All Breeds</li>
          <li><b>Life Stage:</b> All Stages</li>
          <li><b>Protein:</b> Hoki Fish</li>
          <li><b>Size:</b> 85g</li>
          <li><b>Made In:</b> New Zealand</li>
        </ul>
      `;

      // 2. Save it to localStorage:
      window.localStorage.setItem("secondProductDescription", secondProductContent);

      window.localStorage.setItem("productSelected", "secondProduct");

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
   prod_weight = document.getElementById("thirdProductWeight").textContent; // Captures third product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores third product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores third product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores third product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores third product weight in localstorage.
   window.localStorage.setItem("prodSKU", "DOGCF1618"); // Stores the third product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Dog Canned Food"); // Stores the third product category information in localstorage.
   window.localStorage.setItem("prodTag1","Dog Food"); // Stores the third product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Dog Canned Food"); // Stores the third product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Nutrition Feed"); // Stores the third product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Juicy Dog Food"); // Stores the third product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$8.20"); // Stores the third product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","20.00% Off"); // Stores the third product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 8.00%"); // Stores the third product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 3.50%"); // Stores the third product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 1.00%"); // Stores the third product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 82.00%"); // Stores the third product GA4 information in localstorage.
   
   // Third Product Description Content
   // ---------------------------------
      let thirdProductContent = `
      <p>Delicious, chunky, slow-cooked homestyle stew containing tender cuts of premium chicken with peas and carrots in a savory gravy. Complete and balanced for everyday feeding, mixing, or snacking!</p>
    
      <h5>Benefits</h5>
      <ul>
        <li>Complete and balanced for everyday feedings.</li>
        <li>Delicious, chunky, slow-cooked classic stew with premium protein from real chicken and other whole food ingredients.</li>
        <li>Contains only premium, all natural ingredients with no wheat, poultry by-products, artificial colors, flavors, or preservatives.</li>
        <li>Biotin nourishes the coat and skin.</li>
        <li>Vitamin B12 aids gastrointestinal function.</li>
      </ul>

      </br>
      <h5>Facts</h5>
      <ul>
        <li><b>Breed Size:</b> All Breeds</li>
        <li><b>Life Stage:</b> All Stages</li>
        <li><b>Special Diet:</b> By Product-Free, Grain-Free</li>
        <li><b>Protein:</b> Chicken</li>
        <li><b>Size:</b> 354g</li>
        <li><b>Made In:</b> United States</li>
      </ul>
    `;

    // 2. Save it to localStorage:
    window.localStorage.setItem("thirdProductDescription", thirdProductContent);

    window.localStorage.setItem("productSelected", "thirdProduct");


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
   prod_weight = document.getElementById("fourthProductWeight").textContent; // Captures fourth product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores fourth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fourth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fourth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores fourth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "DOGMK2678"); // Stores the fourth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Dog Milk"); // Stores the fourth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Dog Milk"); // Stores the fourth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Dog Fresh Milk"); // Stores the fourth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Breverage"); // Stores the fourth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Digestable Dog Milk"); // Stores the fourth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$5.39"); // Stores the fourth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","10.00% Off"); // Stores the fourth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the fourth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the fourth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the fourth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the fourth product GA4 information in localstorage.
   
   // Fourth Product Description Content
   // ---------------------------------
   let fourthProductContent = `
   <p>Zeal Pet Food was founded in 1999 by Harjit Sidhu, with the vision to provide a sustainable and holistic business approach in every aspect of the company.From procurement through to production, the final product and our customers, their focus is about providing environmentally friendly consumer and production cycles.</p>
 
   <h5>Benefits</h5>
   <ul>
     <li>Zeal Lactose-Free Pet Milk is specifically formulated for puppies and adult dogs.</li>
     <li>Made from lactose-free NZ cows’ milk.</li>
     <li>Easy to digest while maintaining all the natural goodness and taste of cows’ milk.</li>
   </ul>

   </br>
   <h5>Facts</h5>
   <ul>
     <li><b>Breed Size:</b> All Breeds</li>
     <li><b>Life Stage:</b> All Stages, Puppies</li>
     <li><b>Size:</b> 380ml</li>
     <li><b>Made In:</b> New Zealand</li>
   </ul>
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("fourthProductDescription", fourthProductContent);

 window.localStorage.setItem("productSelected", "fourthProduct");

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
   prod_weight = document.getElementById("fifthProductWeight").textContent; // Captures fifth product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores fifth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores fifth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores fifth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores fifth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATCF1147"); // Stores the fifth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Food"); // Stores the fifth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Canned Food"); // Stores the fifth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Cat Canned Milk"); // Stores the fifth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Pet Food"); // Stores the fifth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Felline Canned Food"); // Stores the fifth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$1.40"); // Stores the fifth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","40.00% Off"); // Stores the fifth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 10.00%"); // Stores the fifth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 0.30%"); // Stores the fifth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 1.00%"); // Stores the fifth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 89.00%"); // Stores the fifth product GA4 information in localstorage.

   // Fifth Product Description Content
   // ----------------------------------
   
   let fifthProductContent = `
   <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>
 
   <h5>Contains</h5>
   <ul>
     <li>Tuna Broth</li>
     <li>Tuna</li>
     <li>Anchovy</li>
     <li>Gelling agents (Seaweed, Cassia Gum, Guar Gum, Locust Bean Gum, Potassium Chloride & Carbonates)</li>
    </ul>  
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("fifthProductDescription", fifthProductContent);

 window.localStorage.setItem("productSelected", "fifthProduct");

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
   prod_weight = document.getElementById("sixthProductWeight").textContent; // Captures sixth product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores sixth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores sixth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores sixth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores sixth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATCF1688"); // Stores the sixth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Food"); // Stores the sixth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Canned Food"); // Stores the sixth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Cat Canned Milk"); // Stores the sixth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Pet Food"); // Stores the sixth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Feline Canned Food"); // Stores the sixth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$3.25"); // Stores the sixth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","41.30% Off"); // Stores the sixth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 19.00%"); // Stores the sixth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 1.00%"); // Stores the sixth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 0.50%"); // Stores the sixth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 78.00%"); // Stores the sixth product GA4 information in localstorage.

   // Sixth Product Description Content
   // ----------------------------------
   
   let sixthProductContent = `
   <p>It's a line totally dedicated to the natural feeding, only natural ingredients highly selected, very high quality, complementary food for cats 
      with delicious tuna and chicken, product of Italy, with all the typical features of the high quality products: high palatability from freshness 
      and good quality ingredients, with high nutritional content, rich in Omega 3, rich in proteins, with low fat content. These products are totally 
      natural, without preservatives and colorants, gluten free.Good for helping the cat to keep smart healthy shape, energetic, fresh all the time.
   </p>
 
   <h5>Contains</h5>
   <ul>
     <li>Tuna</li>
     <li>Rice</li>
     <li>F.O.S</li>
     <li>Vitamin E</li>
    </ul>  
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("sixthProductDescription", sixthProductContent);

 window.localStorage.setItem("productSelected", "sixthProduct");


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
   prod_weight = document.getElementById("seventhProductWeight").textContent; // Captures seventh product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores seventh product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores seventh product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores seventh product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores seventh product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATFF4682"); // Stores the seventh product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Food"); // Stores the seventh product category information in localstorage.
   window.localStorage.setItem("prodTag1","Frozen Food"); // Stores the seventh product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Cat Food"); // Stores the seventh product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Frozen Pet Food"); // Stores the seventh product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Feline Frozen Food"); // Stores the seventh product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$50.00"); // Stores the seventh product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","11.11% Off"); // Stores the seventh product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) 27.10%"); // Stores the seventh product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) 3.90%"); // Stores the seventh product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) 0.10%"); // Stores the seventh product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) 72.00%"); // Stores the seventh product GA4 information in localstorage.

   // Seventh Product Description Content
   // ----------------------------------
   
   let seventhProductContent = `
   <p>PetCubes raw diets use meats that are specially made into chunks for your cat to tear and chew on just as nature intended, increasing the satisfaction after every meal!.</p>
 
   <h5>Contains</h5>
   <ul>
     <li>Venison Lean Muscle Meat</li>
     <li>Chicken Neck</li>
     <li>Chicken Breast</li>
     <li>Chicken Liver</li>
     <li>Barramundi Oil</li>
     <li>Organic Sea Kelp</li>
     <li>Ground Eggshells</li>
     <li>Prebiotics & Probiotics Collagen Mix</li>
     <li>Acai Berries</li>
     <li>Ashwagandha Root</li>
     <li>Dandelion Root</li>
     <li>Spirulina, Vitamin E</li>
     <li>Manganese Gluconate</li>
     <li>Vitamin B Complex</li>
     <li>Vitamin D</li>
    </ul>  

    </br>

    <h5>Benifits</h5>
    <p>Kangaroo is rich in taurine which is essential for heart and eye health, low in fat and ideal for weight management</p>
    <ul>
      <li>Made with 100% human-grade ingredients</li>
      <li>A protein-rich diet that cats will thrive on</li>
      <li>No artificial flavors, colours & or preservatives</li>
    </ul>
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("seventhProductDescription", seventhProductContent);

 window.localStorage.setItem("productSelected", "seventhProduct");

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
   prod_weight = document.getElementById("eighthProductWeight").textContent; // Captures eightth product weight.
 
   window.localStorage.setItem("prodImage",prod_image); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores eighth product price in localstorage.

   window.localStorage.setItem("prodImage",prod_image); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores eighth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores eightth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores eighth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATT2897"); // Stores the eighth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Treats"); // Stores the eighth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Feline Treats"); // Stores the eighth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Tasty Cat Treats"); // Stores the eighth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Edibles"); // Stores the eighth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Furries Food"); // Stores the eighth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$28.80"); // Stores the eighth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","52.43% Off"); // Stores the eighth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the eighth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the eighth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the eighth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the eighth product GA4 information in localstorage.

   // Eighth Product Description Content
   // ----------------------------------
   
   let eighthProductContent = `
   <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>
 
   <h5>Contains</h5>
   <ul>
     <li>Duck</li>
    </ul>  

    <br/>

     <h5>Benefits</h5>
       <ul>
         <li>Air-dried and 100% natural.</li>
         <li>0% antibiotics or added hormones.</li>
         <li>Made with a single ingredient.</li>
         <li>No food colouring or artificial preservatives.</li>
         <li>Made in USA.</li>
         <li>For all life stages.</li>
      </ul>  
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("eighthProductDescription", eighthProductContent);

 window.localStorage.setItem("productSelected", "eighthProduct");

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
    prod_weight = document.getElementById("ninethProductWeight").textContent; // Captures ninetth product weight.
  
    window.localStorage.setItem("prodImage",prod_image); // Stores nineth product name in localstorage.
    window.localStorage.setItem("prodName",prod_name); // Stores nineth product name in localstorage.
    window.localStorage.setItem("prodPrice",prod_price); // Stores nineth product price in localstorage.
    window.localStorage.setItem("prodWeight",prod_weight); // Stores nineth product weight in localstorage.
    window.localStorage.setItem("prodSKU", "CATT2897"); // Stores the nineth product SKU in localstorage.
    window.localStorage.setItem("prodCategory","Cat Treats"); // Stores the nineth product category information in localstorage.
    window.localStorage.setItem("prodTag1","Feline Treats"); // Stores the nineth product tag 1 information in localstorage.
    window.localStorage.setItem("prodTag2","Tasty Cat Treats"); // Stores the nineth product tag 2 information in localstorage.
    window.localStorage.setItem("prodTag3","Animal Edibles"); // Stores the nineth product tag 3 information in localstorage.
    window.localStorage.setItem("prodTag4","Furries Food"); // Stores the nineth product tag 4 information in localstorage.
    window.localStorage.setItem("prodRetailPrice","$28.80"); // Stores the nineth product retail pricing information in localstorage.
    window.localStorage.setItem("prodPercentDiscount","52.43% Off"); // Stores the nineth product retail pricing information in localstorage.
    window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the nineth product GA1 information in localstorage.
    window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the nineth product GA2 information in localstorage.
    window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the nineth product GA3 information in localstorage.
    window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the nineth product GA4 information in localstorage.

    // Nineth Product Description Content
    // ----------------------------------
   
   let ninethProductContent = `
   <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>
 
   <h5>Contains</h5>
   <ul>
     <li>Duck</li>
    </ul>  

    <br/>

     <h5>Benefits</h5>
       <ul>
         <li>Air-dried and 100% natural.</li>
         <li>0% antibiotics or added hormones.</li>
         <li>Made with a single ingredient.</li>
         <li>No food colouring or artificial preservatives.</li>
         <li>Made in USA.</li>
         <li>For all life stages.</li>
      </ul>  
 `;

 // 2. Save it to localStorage:
 window.localStorage.setItem("ninethProductDescription", ninethProductContent);

 window.localStorage.setItem("productSelected", "ninethProduct");


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
function captureTenthProductInfo(productDisplayMode)
{
   // Objective: Extracts the tenth listed product's posted information on the Products Listing page.
   // ------------------------------------------------------------------------------------------------
  
   prod_image = document.querySelector("#tenthProductImage").attributes[0].textContent // Captures tenth product image
   prod_name = document.getElementById("tenthProductName").textContent; // Captures tenth product name
   prod_price = document.getElementById("tenthProductPrice").textContent; // Captures tenth product price
   prod_weight = document.getElementById("tenthProductWeight").textContent; // Captures tentth product weight.
  
   window.localStorage.setItem("prodName",prod_image); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores tenth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores tenth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores tenth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATT2897"); // Stores the tenth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Treats"); // Stores the tenth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Feline Treats"); // Stores the tenth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Tasty Cat Treats"); // Stores the tenth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Edibles"); // Stores the tenth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Furries Food"); // Stores the tenth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$28.80"); // Stores the tenth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","52.43% Off"); // Stores the tenth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the tenth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the tenth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the tenth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the tenth product GA4 information in localstorage.

   // Tenth Product Description Content
   // ----------------------------------
  
  let tenthProductContent = `
  <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>

  <h5>Contains</h5>
  <ul>
    <li>Duck</li>
   </ul>  

   <br/>

    <h5>Benefits</h5>
      <ul>
        <li>Air-dried and 100% natural.</li>
        <li>0% antibiotics or added hormones.</li>
        <li>Made with a single ingredient.</li>
        <li>No food colouring or artificial preservatives.</li>
        <li>Made in USA.</li>
        <li>For all life stages.</li>
     </ul>  
`;

// 2. Save it to localStorage:
window.localStorage.setItem("tenthProductDescription", tenthProductContent);

window.localStorage.setItem("productSelected", "tenthProduct");
   
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
   prod_weight = document.getElementById("eleventhProductWeight").textContent; // Captures eleventh product weight.
 
   window.localStorage.setItem("prodName",prod_image); // Stores eleventh product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores eleventh product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores eleventh product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores eleventh product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATT2897"); // Stores the eleventh product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Treats"); // Stores the eleventh product category information in localstorage.
   window.localStorage.setItem("prodTag1","Feline Treats"); // Stores the eleventh product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Tasty Cat Treats"); // Stores the eleventh product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Edibles"); // Stores the eleventh product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Furries Food"); // Stores the eleventh product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$28.80"); // Stores the eleventh product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","52.43% Off"); // Stores the eleventh product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the eleventh product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the eleventh product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the eleventh product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the eleventh product GA4 information in localstorage.

   // Eleventh Product Description Content
   // ----------------------------------
  
  let eleventhProductContent = `
  <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>

  <h5>Contains</h5>
  <ul>
    <li>Duck</li>
   </ul>  

   <br/>

    <h5>Benefits</h5>
      <ul>
        <li>Air-dried and 100% natural.</li>
        <li>0% antibiotics or added hormones.</li>
        <li>Made with a single ingredient.</li>
        <li>No food colouring or artificial preservatives.</li>
        <li>Made in USA.</li>
        <li>For all life stages.</li>
     </ul>  
`;

// 2. Save it to localStorage:
window.localStorage.setItem("eleventhProductDescription", eleventhProductContent);

window.localStorage.setItem("productSelected", "eleventhProduct");
   
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
   prod_weight = document.getElementById("twelvethProductWeight").textContent; // Captures twelveth product weight.
 
   window.localStorage.setItem("prodName",prod_image); // Stores twelveth product name in localstorage.
   window.localStorage.setItem("prodName",prod_name); // Stores twelveth product name in localstorage.
   window.localStorage.setItem("prodPrice",prod_price); // Stores twelveth product price in localstorage.
   window.localStorage.setItem("prodWeight",prod_weight); // Stores twelveth product weight in localstorage.
   window.localStorage.setItem("prodSKU", "CATT2897"); // Stores the twelveth product SKU in localstorage.
   window.localStorage.setItem("prodCategory","Cat Treats"); // Stores the twelveth product category information in localstorage.
   window.localStorage.setItem("prodTag1","Feline Treats"); // Stores the twelveth product tag 1 information in localstorage.
   window.localStorage.setItem("prodTag2","Tasty Cat Treats"); // Stores the twelveth product tag 2 information in localstorage.
   window.localStorage.setItem("prodTag3","Animal Edibles"); // Stores the twelveth product tag 3 information in localstorage.
   window.localStorage.setItem("prodTag4","Furries Food"); // Stores the twelveth product tag 4 information in localstorage.
   window.localStorage.setItem("prodRetailPrice","$28.80"); // Stores the twelveth product retail pricing information in localstorage.
   window.localStorage.setItem("prodPercentDiscount","52.43% Off"); // Stores the twelveth product retail pricing information in localstorage.
   window.localStorage.setItem("prodGA1","Crude Protein (min.) TBA"); // Stores the twelveth product GA1 information in localstorage.
   window.localStorage.setItem("prodGA2","Crude Fat (min.) TBA"); // Stores the twelveth product GA2 information in localstorage.
   window.localStorage.setItem("prodGA3","Crude Fiber (max.) TBA"); // Stores the twelveth product GA3 information in localstorage.
   window.localStorage.setItem("prodGA4","Moisture (max.) TBA"); // Stores the twelveth product GA4 information in localstorage.

   // Twelveth Product Description Content
   // ----------------------------------
  
  let twelvethProductContent = `
  <p>The Aatas Cat Tantalizing Tuna range offers a variety of flavours to cater to different taste buds. The formulas are natural, tasty and rich, yet healthy for cats because they are low in both fat and calories.</p>

  <h5>Contains</h5>
  <ul>
    <li>Duck</li>
   </ul>  

   <br/>

    <h5>Benefits</h5>
      <ul>
        <li>Air-dried and 100% natural.</li>
        <li>0% antibiotics or added hormones.</li>
        <li>Made with a single ingredient.</li>
        <li>No food colouring or artificial preservatives.</li>
        <li>Made in USA.</li>
        <li>For all life stages.</li>
     </ul>  
`;

// 2. Save it to localStorage:
window.localStorage.setItem("twelvethProductDescription", twelvethProductContent);

window.localStorage.setItem("productSelected", "twelvethProduct");

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
 //  let prod_image = document.querySelector("#picProductImage").attributes[1].textContent // Captures sixteenth product name
 //  alert("Product Image Path: " + prod_image);
} // End of const captureProductImage =()

function updateProductDetails()
{

 // Objective: Update the selected product with the detailed information
 // ---------------------------------------------------------------------

    let productSelected = window.localStorage.getItem("productSelected");

    if(productSelected === "firstProduct") // First Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("firstProductDescription"); // First Product Description
    }
    else if(productSelected === "secondProduct") // Second Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("secondProductDescription"); // Second Product Description
    }
    else if(productSelected === "thirdProduct") // Third Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("thirdProductDescription"); // Third Product Description
    }
    else if(productSelected === "fourthProduct") // Fourth  Product
    {
       document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("fourthProductDescription"); // Fourth Product Description
    } 
    else if(productSelected === "fifthProduct") // Fifth Product
    {
       document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("fifthProductDescription"); // Fifth Product Description
    }
    else if(productSelected === "sixthProduct") // Sixth Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("sixthProductDescription"); // Sixth Product Description
    }  
    else if(productSelected === "seventhProduct") // Seventh Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("seventhProductDescription"); // Seventh Product Description
    }  
    else if(productSelected === "eighthProduct") // Eighth Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("eighthProductDescription"); // Eighth Product Description
    } 
    else if(productSelected === "ninethProduct") // Nineth Product
    {
      document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("ninethProductDescription"); // Nineth Product Description
    } 
    else if(productSelected === "tenthProduct") // Tenth Product
    {
       document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("tenthProductDescription"); // Tenth Product Description
    } 
    else if(productSelected === "eleventhProduct") // Eleventh Product
    {
       document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("eleventhProductDescription"); // Eleventh Product Description
    } 
     else if(productSelected === "twelvethProduct") // Twelveth Product
     {
       document.querySelector("#prodDescription").innerHTML = window.localStorage.getItem("twelvethProductDescription"); // Twelveth Product Description
     } // End of nested if-else statement
   
   document.querySelector("#product_img").src = window.localStorage.getItem("prodImage"); // Simple Product Image
   document.querySelector("#product_title_details").innerText = window.localStorage.getItem("prodName"); // Product Title
   document.querySelector("#product_price_details").innerText = window.localStorage.getItem("prodPrice"); // Product Price
   document.querySelector("#prodSKU").innerText = window.localStorage.getItem("prodSKU"); // Product SKU
   document.querySelector("#prodCategory").innerText = window.localStorage.getItem("prodCategory"); // Product Category4
   document.querySelector("#prodWeightInfo").innerText = window.localStorage.getItem("prodWeight"); // Product Weight
   document.querySelector("#prod_retail_price").innerText = window.localStorage.getItem("prodRetailPrice"); // Product Retail Price
   document.querySelector("#prod_sales_price").innerText = window.localStorage.getItem("prodPercentDiscount"); // Product Retail Discount Price
   document.querySelector("#prodTag1").innerText = window.localStorage.getItem("prodTag1"); // Product Tag #1
   document.querySelector("#prodTag2").innerText = window.localStorage.getItem("prodTag2"); // Product Tag #2
   document.querySelector("#prodTag3").innerText = window.localStorage.getItem("prodTag3"); // Product Tag #3
   document.querySelector("#prodTag4").innerText = window.localStorage.getItem("prodTag4"); // Product Tag #4
   document.querySelector("#prodGA1").innerText = window.localStorage.getItem("prodGA1"); // Product Gauranteed Analysis #1
   document.querySelector("#prodGA2").innerText = window.localStorage.getItem("prodGA2"); // Product Gauranteed Analysis #2
   document.querySelector("#prodGA3").innerText = window.localStorage.getItem("prodGA3"); // Product Gauranteed Analysis #3
   document.querySelector("#prodGA4").innerText = window.localStorage.getItem("prodGA4"); // Product Gauranteed Analysis #4

   
   
} // End of const updateProductDetails =()

function displayShoppingCart()  // Targets Add to Cart page
{
 // Objective: Display the list of purchased products information inside the shopping cart.
 // ----------------------------------------------------------------------------------------
     document.querySelector("#tblProductImage").src = window.localStorage.getItem("prodImage");  
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

      prod_total_cost = (prod_quantity * prod_price);
      prod_total_cost = "$" + prod_total_cost.toFixed(2).toString();

      document.querySelector("#tblProductTotalCost").innerText = prod_total_cost;
      document.querySelector("#lblCartSubTotal").innerText = document.querySelector("#tblProductTotalCost").innerText;
      document.querySelector("#lblCartGrandTotal").innerText = document.querySelector("#tblProductTotalCost").innerText;

     // Saves the comuputed Grand Total price in localstorage
     // ------------------------------------------------------
        window.localStorage.setItem("prodQuantity", prod_quantity); // Quantity
        window.localStorage.setItem("prodGrandTotal", prod_total_cost); // Grand-Total

  } // End of function updateShoppingCart()

  function updateCheckout()
  {
    // Objective: Provide and upate the actually total product purchases expenditure at Checkout page.
    // ------------------------------------------------------------------------------------------------
   
    document.querySelector("#tblCheckoutProductName").innerText = window.localStorage.getItem("prodName"); // Product Name
    document.querySelector("#tblCheckoutProductName").innerText = document.querySelector("#tblCheckoutProductName").innerText + " ";
    document.querySelector("#tblCheckoutProductQuantity").innerText = window.localStorage.getItem("prodQuantity"); // Product Quantity
    document.querySelector("#tblCheckoutProductQuantity").innerText = document.querySelector("#tblCheckoutProductQuantity").innerText + " x";
    document.querySelector("#tblCheckoutProductPrice").innerText = window.localStorage.getItem("prodGrandTotal"); // Product Grand Total
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
      let _deleteCategoryRequest = confirm("WARNING: THIS PROCESS IS IRREVERSIBLE AND ALL THE DATA WILL BE LOST!! Confirm Delete current Product Category Data?");

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
      let _deleteProductRequest = confirm("WARNING: THIS PROCESS IS IRREVERSIBLE AND ALL THE DATA WILL BE LOST!! Confirm Delete current Product Information Data?");

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
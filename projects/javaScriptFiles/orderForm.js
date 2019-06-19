 /************************************************
  * Adds up all of the prices of what the user
  * has selected. Also changes the color of 
  * what they have selected when they selected. 
  ***********************************************/
function total() {
    var total = 0;
    
    //reset colors
    document.getElementById("floralWords").style.color  = "purple";
    document.getElementById("summerWords").style.color  = "purple";
    document.getElementById("berriesWords").style.color = "purple";
    document.getElementById("cabbageWords").style.color = "purple"; 


    if (document.getElementById("florals").checked) {
       total += document.getElementById("florals").value *1;
       //CSS style change
       document.getElementById("floralWords").style.color = "#e20641";
    } 
    if (document.getElementById("summerRoses").checked) {
       total += document.getElementById("summerRoses").value *1;
       document.getElementById("summerWords").style.color = "#e20641"
    } 
    if (document.getElementById("berries").checked) {
       total += document.getElementById("berries").value *1;
       document.getElementById("berriesWords").style.color = "#e20641";
    } 
    if (document.getElementById("cabbageRoses").checked) {
       total += document.getElementById("cabbageRoses").value *1;
       document.getElementById("cabbageWords").style.color = "#e20641";
    } 
 
    document.getElementById("total").innerHTML = ("TOTAL: $ " + total *1);
 
    return total;
 }
 
  /************************************************
  * Sets visiblity for all error messages to 
  * "hidden" so they won't show on page load. 
  ***********************************************/
 function hideErrors() {
    var e = document.getElementById("phoneError");
    e.style.visibility = "hidden";
 
    var e2 = document.getElementById("cardError");
    e2.style.visibility = "hidden";
    
    var e3 = document.getElementById("dateError");
    e3.style.visibility = "hidden";
 
 }
 
  /************************************************
  * Makes sure card number is valid. 
  ***********************************************/
 function validateCard() {
   var dom = document.getElementById("card");
   var pattern = /^\d{16}/;
   var e = document.getElementById("cardError");

   if(dom.value.match(pattern)) {
       e.style.visibility = "hidden";
       return true;
   }
   else {
     e.style.visibility = "visible";
     return false;
   }
 
 }
 
 
  /************************************************
  * Makes sure phone number is valid.
  ***********************************************/
 function validatePhone() {
   var dom = document.getElementById("phone");
   var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   var e = document.getElementById("phoneError");
 
   if(dom.value.match(pattern)) {
    e.style.visibility = "hidden";
     return true;
   }
   else {
     e.style.visibility = "visible";
     return false;
   }
 
 }
 
  /************************************************
  * Makes sure card date is valid.
  ***********************************************/
 function validateDate() {
   var dom     = document.getElementById("cardDate");
   var pattern = /^(\d{2})\/(\d{4})$/;
   var e       = document.getElementById("dateError");

   //window.alert("validate date called");
   
   if(dom.value.match(pattern)) {
    //window.alert("pattern matches");
    e.style.visibility = "hidden";
     return true;
   }
   else {
     e.style.visibility = "visible";
     return false;
   }
 
 }
 

  /************************************************
  * Makes sure all fields are filled out. 
  ***********************************************/
 function validate() {
   var c = document.getElementById("card");
   var y = document.getElementById("cardDateYear");
   var m = document.getElementById("cardDateMonth");
   var p = document.getElementById("phone");
   var f = document.getElementById("fname");
   var l = document.getElementById("lname");
   var a = document.getElementById("address");
 
 
     if(f.value == "") {
     alert("All fields must be filled out.");
     f.focus();
     return false;
     }
     if(l.value == "") {
     alert("All fields must be filled out.");
     l.focus();
     return false;
    }
     if(p.value == "") {
     alert("All fields must be filled out.");
     p.focus();
     return false;
    }
    if(c.value == "") {
     alert("All fields must be filled out.");
     c.focus();
     return false;
    }
    if(y.value == "") {
     alert("All fields must be filled out.");
     y.focus();
     return false;
    }
    if(m.value == "") {
     alert("All fields must be filled out.");
     m.focus();
     return false;
    }
    if(a.value == "") {
     alert("All fields must be filled out.");
     a.focus();
     return false;
    }
    else
     return true;
 }
 
 /************************************************
  * Sets focus on the first element of page
  ***********************************************/
 function setFocus() {
 
   document.getElementById("fname").focus();
 
 }


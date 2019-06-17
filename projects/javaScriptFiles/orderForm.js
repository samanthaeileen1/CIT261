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
 
 function hideErrors() {
    var e = document.getElementById("phoneError");
    e.style.visibility = "hidden";
 
    var e2 = document.getElementById("cardError");
    e2.style.visibility = "hidden";
    
    var e3 = document.getElementById("dateError");
    e3.style.visibility = "hidden";
 
 }
 
 
 function validateCard() {
   var dom = document.getElementById("card");
   var pattern = /^\d{16}/;
   var e = document.getElementById("cardError");
 
   if(dom.value.match(pattern)) {
     return true;
   }
   else {
     e.style.visibility = "visible";
     return false;
   }
 
 }
 
 
 function validatePhone() {
   var dom = document.getElementById("phone");
   var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   var e = document.getElementById("phoneError");
 
   if(dom.value.match(pattern)) {
     return true;
   }
   else {
     e.style.visibility = "visible";
     return false;
   }
 
 }
 
 function validateDate() {
   var dom     = document.getElementById("cardDate");
   var pattern = /^([0-1][0-9])(\/)([2]{1}[0]{0}[1-9]{1}[0-9]{1})$/;
   var e       = document.getElementById("dateError");
   console.log("validateDate called. ");
 
   if(dom.value.match(pattern)) {
    console.log("match returned true");
     return true;
   }
   else {
       console.log("match returned false.");
     e.style.visibility = "visible";
     return false;
   }
 
 }
 
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

 function displayOrderSummary() {
    var order = 


     document.getElementById("orderSummary").innerHTML = order;
 }
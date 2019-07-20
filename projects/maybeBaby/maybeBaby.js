/***************************************************
 * SET & GET DATE
 * *************************************************/
function setDate() {
    alert("setDate() has been called.");
    var userDate = document.getElementById("date").value;
    window.localStorage.setItem("date", userDate);
    alert("Here is userDate " + userDate);
}

function getDate() {
    alert("getDate() was called.");
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

/***************************************************
 * SET & GET TYPE
 * *************************************************/
function setType() {
    alert("setType called");
    var radios = document.getElementsByName('radio');
    
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            //alert("we have a match. Something is checked.");
            var userType = radios[i].value;
            window.localStorage.setItem("type", userType);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function getType() {
     alert("getType() was called.");
    document.getElementById("displayType").innerHTML = window.localStorage.getItem("type");
}

/***************************************************
 * SET & GET MEDICATION DETAILS
 * *************************************************/
function setMedDetails() {
    alert("setMedDetails() has been called.");
    
    var medName = document.getElementById("medName").value;
    window.localStorage.setItem("medName", medName);
    
    var medDate = document.getElementById("medDate").value;
    window.localStorage.setItem("medDate", medDate);

    var medDosage = document.getElementById("medDosage").value;
    window.localStorage.setItem("medDosage", medDosage);

    var medNumDays = document.getElementById("medNumDays").value;
    window.localStorage.setItem("medNumDays", medNumDays);

    var medTime = document.getElementById("medTime").value;
    window.localStorage.setItem("medTime", medTime);

    var medCost = document.getElementById("medCost").value;
    window.localStorage.setItem("medCost", medCost);

    var medNotes = document.getElementById("medNotes").value;
    window.localStorage.setItem("medNotes", medNotes);

}

function getMedDetails() {
    alert("getMedDetails() was called.");
    document.getElementById("displayMedName").innerHTML = window.localStorage.getItem("medName");
    document.getElementById("displayMedDate").innerHTML = window.localStorage.getItem("medDate");
    document.getElementById("displayMedDosage").innerHTML = window.localStorage.getItem("medDosage");
    document.getElementById("displayMedNumDays").innerHTML = window.localStorage.getItem("medNumDays");
    document.getElementById("displayMedTime").innerHTML = window.localStorage.getItem("medTime");
    document.getElementById("displayMedCost").innerHTML = window.localStorage.getItem("medCost");
    document.getElementById("displayMedNotes").innerHTML = window.localStorage.getItem("medNotes");

}

/***************************************************
 * SET & GET APPOINTMENT DETAILS
 * *************************************************/
function setAppDetails() {
    alert("setAppDetails() has been called.");
    
    var appType = document.getElementById("appType").value;
    window.localStorage.setItem("appType", appType);
    
    var appDate = document.getElementById("appDate").value;
    window.localStorage.setItem("appDate", appDate);

    var appLocation = document.getElementById("appLocation").value;
    window.localStorage.setItem("appLocation", appLocation)
    
    var appCost = document.getElementById("appCost").value;
    window.localStorage.setItem("appCost", appCost);

    var appNotes = document.getElementById("appNotes").value;
    window.localStorage.setItem("appNotes", appNotes);
}

function getAppDetails() {
    alert("getAppDetails() was called.");
    document.getElementById("displayAppType").innerHTML = window.localStorage.getItem("appType");
    document.getElementById("displayAppDate").innerHTML = window.localStorage.getItem("appDate");
    document.getElementById("displayAppLocation").innerHTML = window.localStorage.getItem("appLocation");
    document.getElementById("displayAppCost").innerHTML = window.localStorage.getItem("appCost");
    document.getElementById("displayAppNotes").innerHTML = window.localStorage.getItem("appNotes");


}

/***************************************************
 * ADD BUTTONS
 * *************************************************/
function addAppointment() {
    //alert("addAppointment being called");
    var addHTML1 = "<h3>YOUR APPOINTMENT</h3><p>Type:</p><input type='text' id='appType'><br>";
    var addHTML2 = "<p>Date:</p><input type='text' id='appDate'><br>";
    var addHTML3 = "<p>Location:</p><input type='text' id='appLocation'><br>";
    var addHTML4 = "<p>Cost:</p><input type='text' id='appCost'><br>";
    var addHTML5 = "<p>Notes:</p><input type='text' id='appNotes'><br>";
    
    var total = addHTML1 + addHTML2 + addHTML3 + addHTML4 + addHTML5;
    //alert("This is var total " + total);
    document.getElementById("addAppointmentDiv").innerHTML = total;

}

function addMedication() {
    //alert("addMedication being called");
    var addHTML1 = "<h3>YOUR MEDICATION</h3><br>";
    var addHTML2 = "<p>Medication Name:</p><input type='text' id='medName'><br>";
    var addHTML3 = "<p>Day of Cycle Started:</p><input type='text' id='medDate'><br>";
    var addHTML4 = "<p>Dosage:</p><input type='text' id='medDosage'><br>";
    var addHTML5 = "<p>Number of Days Taken:</p><input type='text' id='medNumDays'><br>";
    var addHTML6 = "<p>Time of Day Taken:</p><input type='text' id='medTime'><br>";
    var addHTML7 = "<p>Total Cost:</p><input type='text' id='medCost'><br>";
    var addHTML8 = "<p>Notes:</p><input type='text' id='medNotes'><br>";


    var total = addHTML1 + addHTML2 + addHTML3 + addHTML4 + addHTML5 + addHTML6 + addHTML7 + addHTML8;
    //alert("This is var total " + total);
    document.getElementById("addMedicationDiv").innerHTML = total;
}



/***************************************************
 * CYCLE GET, SET AND CLEAR
 * *************************************************/
function loadCycle() {
    // alert("loadCycle() called.");
    // getType();
    // getDate();  
    //computeCost();
    // getMedDetails();
    // getAppDetails();

    displayCycle();
    displayAppointment();
  
   
    
}


function saveCycle() {
    // setDate();
    // setType();
    // setAppDetails();
    // setMedDetails();
    createCycle();
    createAppointment();
    createMedication();
}

function clearCycle() {
   alert("clearCycle() called.");

   window.localStorage.removeItem("cycle");
   window.localStorage.removeItem("appointment");
   window.localStorage.removeItem("medication");

    // document.getElementById("displayAppType").value = "";
    // document.getElementById("displayAppDate").value = "";
    // document.getElementById("displayAppLocation").value = "";
    // document.getElementById("displayAppCost").value = "";
    // document.getElementById("displayAppNotes").value = "";


    // document.getElementById("displayMedName").value = "";
    // document.getElementById("displayMedDate").value = "";
    // document.getElementById("displayMedDosage").value = "";
    // document.getElementById("displayMedNumDays").value ="";
    // document.getElementById("displayMedTime").value = "";
    // document.getElementById("displayMedCost").value = "";
    // document.getElementById("displayMedNotes").value = "";
    // document.getElementById("date").value = "";
    // document.getElementById("type").checked = false;


  

}


/***************************************************
 * COMPUTE AND DISPLAY TOTAL CYCLE COST 
 * *************************************************/

 function computeCost() {
    alert("computeCost() called");
    var total = 0;
    var appCost = window.localStorage.getItem("appCost");
    var medCost = window.localStorage.getItem("medCost");
    total += appCost *1;
    total += medCost *1;
    //total += document.getElementById("appCost").value *1;
    alert("This is the total: " + total);
    return total;
 }





/***************************************************
 * CYCLE, APPOINTMENT AND MEDICATION CLASSES
 * *************************************************/

 function Cycle(type, date, cost) {
     this.type = type;
     this.date = date;
     this.cost = cost;
 }

 function Appointment(appType, appDate, appLocation, appCost, appNotes) {
     this.appType = appType;
     this.appDate = appDate;
     this.appLocation = appLocation;
     this.appCost = appCost;
     this.appNotes = appNotes;
     
 }

 function Medication(medName, medDate, medDosage, medNumDays, medTime, medCost, medNotes) {
     this.medName = medName;
     this.medDate = medDate;
     this.medDosage = medDosage;
     this.medNumDays = medNumDays;
     this.medTime = medTime;
     this.medCost = medCost;
     this.medNotes = medNotes;
    
 }


 /***************************************************
 * CREATE FUNCTIONS
 * *************************************************/
function createCycle(){
    alert("createCycle() called");
    var radios = document.getElementsByName('radio');
    
    //loop to check what radio button is checked
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            //alert("we have a match. Something is checked.");
            var userType = radios[i].value;
            //save this radio button value because it is what the user checked
            window.localStorage.setItem("type", userType);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    var userDate = document.getElementById("date").value;
    var cost = computeCost();
    alert("this is the cost " +  cost);

    alert("Just a test to see if .value is working to get the user input. Here is userType, userDate: " + userType + ", " + userDate);
    //create new cycle object using our constructor and user input
    var myCycle = new Cycle(userType, userDate, cost);

    //turn the CYCLE into a JSON string so we can store it in local storage
    var JSONcycle = JSON.stringify(myCycle);
    alert("This is JSONcycle: " + JSONcycle);

    //save the cycle (now a string) into long term local storage
    window.localStorage.setItem("cycle", JSONcycle);
}

function createAppointment() {

    alert("createAppointment() called");
    //get our variables from the user's input
    var appType = document.getElementById("appType").value;
    var appDate = document.getElementById("appDate").value;
    var appLocation = document.getElementById("appLocation").value;
    var appCost = document.getElementById("appCost").value;
    var appNotes = document.getElementById("appNotes").value;
    
    //create the appt with our constructor
    var myAppt = new Appointment(appType, appDate, appLocation, appCost, appNotes);

    //turn the APPOINTMENT into a JSON string
    var JSONappt = JSON.stringify(myAppt);
    alert("Here is the JSONappt: " + JSONappt);
    //save the appointment (now a string) to local storage
    window.localStorage.setItem("appointment", JSONappt);
}


function createMedication() {
    alert("createMedication() called");

    //get our variables from user's input
    var medName = document.getElementById("medName").value;
    var medDate = document.getElementById("medDate").value;
    var medDosage = document.getElementById("medDosage").value;
    var medNumDays = document.getElementById("medNumDays").value;
    var medTime = document.getElementById("medTime").value;
    var medCost = document.getElementById("medCost").value;
    var medNotes = document.getElementById("medNotes").value;

    //create the med from the constructor and user input
    var myMed = new Medication(medName, medDate, medDosage, medNumDays, medTime, medCost, medNotes);

    //turn the MEDICATION into a JSON string
    var JSONmed = JSON.stringify(myMed);
    alert("Here is the JSONmed: " + JSONmed);
    //save the med (now a string) to local storage
    window.localStorage.setItem("medication", JSONmed);
}



/***************************************************
 * DISPLAY FUNCTIONS
 * *************************************************/
function displayCycle() {
    alert("displayCycle() called");
        
    //get the JSON cycle out of the local storage
     var JSONcycle = window.localStorage.getItem("cycle");
     alert("JSONcycle is " + JSONcycle);
    
    //turn the string into a CYCLE object
    var myCycle = JSON.parse(JSONcycle);
    alert("This is myCycle.type: " + myCycle.type);


    //display the cycle information in the HTML
    document.getElementById("displayType").innerHTML = myCycle.type;
    document.getElementById("displayDate").innerHTML = myCycle.date;
    document.getElementById("displayCost").innerHTML = myCycle.cost; 
}


function displayAppointment() {
    alert("displayAppointment() called");

    //get the JSON appointment out of local storage
    var JSONappt = window.localStorage.getItem("appointment");
    alert("JSONappt is " + JSONappt);

    //turn the string into a APPOINTMENT object
    var myAppt = JSON.parse(JSONappt);
    alert("This is myAppt.type" + myAppt.type);

    //display the appointment info in the HTML page
    document.getElementById("displayAppType").innerHTML = myAppt.appType;
    document.getElementById("displayAppDate").innerHTML = myAppt.appDate;
    document.getElementById("displayAppLocation").innerHTML = myAppt.appLocation;
    document.getElementById("displayAppCost").innerHTML = myAppt.appCost;
    document.getElementById("displayAppNotes").innerHTML = myAppt.appNotes;
}
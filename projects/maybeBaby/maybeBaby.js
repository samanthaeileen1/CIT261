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
    //alert("loadCycle() called.");

    displayCycle();
    displayAppointment();
    displayMedication();
    
}

function saveCycle() {
    //alert("saveCycle() called");

    createCycle();
    createAppointment();
    createMedication();
}

function clearCycle() {
   //alert("clearCycle() called.");

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
 * COMPUTE TOTAL CYCLE COST 
 * *************************************************/
 function computeCost() {
    ///alert("computeCost() called");
    var total = 0;
    var appCost = document.getElementById("appCost").value;
    var medCost = document.getElementById("medCost").value;
    total += appCost *1;
    total += medCost *1;
    ///alert("This is the total: " + total);
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
    //alert("createCycle() called");

    var radios = document.getElementsByName('radio');
    
    //loop to check what radio button is checked
    for (var i = 0, length = radios.length; i < length; i++)
    {
        if (radios[i].checked)
        {
            //alert("we have a match. Something is checked.");
            var userType = radios[i].value;
            //save this radio button value because it is what the user checked
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    var userDate = document.getElementById("date").value;
    var cost = computeCost();
    
    //alert("this is the cost " +  cost);
    //alert("Just a test to see if .value is working to get the user input. Here is userType, userDate: " + userType + ", " + userDate);
    
    //create new cycle object using our constructor and user input
    var myCycle = new Cycle(userType, userDate, cost);

    //turn the CYCLE into a JSON string so we can store it in local storage
    var JSONcycle = JSON.stringify(myCycle);
    
    //alert("This is JSONcycle: " + JSONcycle);

    //save the cycle (now a string) into long term local storage
    window.localStorage.setItem("cycle", JSONcycle);
}

function createAppointment() {

    //alert("createAppointment() called");

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
    
    //alert("Here is the JSONappt: " + JSONappt);
    
    //save the appointment (now a string) to local storage
    window.localStorage.setItem("appointment", JSONappt);
}


function createMedication() {
    //alert("createMedication() called");

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
    
    //alert("Here is the JSONmed: " + JSONmed);
    
    //save the med (now a string) to local storage
    window.localStorage.setItem("medication", JSONmed);
}



/***************************************************
 * DISPLAY FUNCTIONS
 * *************************************************/
function displayCycle() {
    //alert("displayCycle() called");
        
    //get the JSON cycle out of the local storage
     var JSONcycle = window.localStorage.getItem("cycle");
     //alert("JSONcycle is " + JSONcycle);
    
    //turn the string into a CYCLE object
    var myCycle = JSON.parse(JSONcycle);
    
    //alert("This is myCycle.type: " + myCycle.type);


    //display the cycle information in the HTML
    document.getElementById("displayType").innerHTML = myCycle.type;
    document.getElementById("displayDate").innerHTML = myCycle.date;
    document.getElementById("displayTotalCost").innerHTML = myCycle.cost; 
}


function displayAppointment() {
    //alert("displayAppointment() called");

    //get the JSON appointment out of local storage
    var JSONappt = window.localStorage.getItem("appointment");
    
    //alert("JSONappt is " + JSONappt);

    //turn the string into a APPOINTMENT object
    var myAppt = JSON.parse(JSONappt);
    
    //alert("This is myAppt.type " + myAppt.type);

    //display the appointment info in the HTML page
    document.getElementById("displayAppType").innerHTML = myAppt.appType;
    document.getElementById("displayAppDate").innerHTML = myAppt.appDate;
    document.getElementById("displayAppLocation").innerHTML = myAppt.appLocation;
    document.getElementById("displayAppCost").innerHTML = myAppt.appCost;
    document.getElementById("displayAppNotes").innerHTML = myAppt.appNotes;
}

function displayMedication() {
    //alert("displayMedication() called");

    //get the JSON medication out of local storage
    var JSONmed = window.localStorage.getItem("medication");
    
    //alert("JSONmed is " + JSONmed);

    //turn the string into a MEDICATION object
    var myMed = JSON.parse(JSONmed);
    
    //alert("This is myMed.name " + myMed.name);

    //display the medication infor in the HTML
    document.getElementById("displayMedName").innerHTML = myMed.medName;
    document.getElementById("displayMedDate").innerHTML = myMed.medDate;
    document.getElementById("displayMedDosage").innerHTML = myMed.medDosage;
    document.getElementById("displayMedNumDays").innerHTML = myMed.medNumDays;
    document.getElementById("displayMedTime").innerHTML = myMed.medTime;
    document.getElementById("displayMedCost").innerHTML = myMed.medCost;
    document.getElementById("displayMedNotes").innerHTML = myMed.medNotes;
}
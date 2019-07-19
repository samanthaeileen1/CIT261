/***************************************************
 * SET & GET DATE
 * *************************************************/
function setDate() {
    // alert("setDate() has been called.");
    var userDate = document.getElementById("date").value;
    window.localStorage.setItem("date", userDate);
    // alert("Here is userDate " + userDate);
}

function getDate() {
    // alert("getDate() was called.");
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

/***************************************************
 * SET & GET TYPE
 * *************************************************/
function setType() {
    //alert("setType called");
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
    // alert("getType() was called.");
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
    // alert("getDate() was called.");
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
    // alert("getDate() was called.");
    document.getElementById("displayappType").innerHTML = window.localStorage.getItem("appType");
    document.getElementById("displayappDate").innerHTML = window.localStorage.getItem("appDate");
    document.getElementById("displayappLocation").innerHTML = window.localStorage.getItem("appLocation");
    document.getElementById("displayappCost").innerHTML = window.localStorage.getItem("appCost");
    document.getElementById("displayappNotes").innerHTML = window.localStorage.getItem("appNotes");


}

/***************************************************
 * ADD BUTTONS
 * *************************************************/
function addAppointment() {
    alert("addAppointment being called");
    var addHTML1 = "<h3>YOUR APPOINTMENT</h3><p>Type:</p><input type='text' id='appType'><br>";
    var addHTML2 = "<p>Date:</p><input type='text' id='appDate'><br>";
    var addHTML3 = "<p>Location:</p><input type='text' id='appLocation'><br>";
    var addHTML4 = "<p>Cost:</p><input type='text' id='appCost'><br>";
    var addHTML5 = "<p>Notes:</p><input type='text' id='appNotes'><br>";
    
    var total = addHTML1 + addHTML2 + addHTML3 + addHTML4 + addHTML5;
    alert("This is var total " + total);
    document.getElementById("addAppointmentDiv").innerHTML = total;

}

function addMedication() {
    alert("addMedication being called");
    var addHTML1 = "<h3>YOUR MEDICATION</h3><br>";
    var addHTML2 = "<p>Medication Name:</p><input type='text' id='medName'><br>";
    var addHTML3 = "<p>Day of Cycle Started:</p><input type='text' id='medDate'><br>";
    var addHTML4 = "<p>Dosage:</p><input type='text' id='medDosage'><br>";
    var addHTML5 = "<p>Number of Days Taken:</p><input type='text' id='medNumDays'><br>";
    var addHTML6 = "<p>Time of Day Taken:</p><input type='text' id='medTime'><br>";
    var addHTML7 = "<p>Total Cost:</p><input type='text' id='medCost'><br>";
    var addHTML8 = "<p>Notes:</p><input type='text' id='medNotes'><br>";


    var total = addHTML1 + addHTML2 + addHTML3 + addHTML4 + addHTML5 + addHTML6 + addHTML7 + addHTML8;
    alert("This is var total " + total);
    document.getElementById("addMedicationDiv").innerHTML = total;
}



/***************************************************
 * CYCLE GET, SET AND CLEAR
 * *************************************************/
function loadCycle() {
    // alert("loadCycle() called.");
    getType();
    getDate();
    getMedDetails();
    getAppDetails();
}


function saveCycle() {
    setDate();
    setType();
    setMedDetails();
    setAppDetails();
}

function clearCycle() {
    alert("clearCycle() called.");
    window.localStorage.removeItem("type");
    window.localStorage.removeItem("date");

    document.getElementById("date").value = "";
}
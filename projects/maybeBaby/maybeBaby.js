function setDate() {
    // alert("setDate() has been called.");
    var userDate = document.getElementById("date").value;
    window.localStorage.setItem("date", userDate);
    // alert("Here is userDate " + userDate);
}

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

function addAppointment() {
    alert("addAppointment being called");
    var addHTML1 = "<h2>YOUR APPOINTMENT</h2><p>Type:</p><input type='text' id='appType'><br>";
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
    var addHTML1 = "<h2>YOUR MEDICATION</h2><p>Type:</p><input type='text' id='appType'><br>";
    var addHTML2 = "<p>Medication Name:</p><input type='text' id='medName'><br>";
    var addHTML3 = "<p>Day of Cycle Started:</p><input type='text' id='medDate'><br>";
    var addHTML4 = "<p>Dosage:</p><input type='text' id='medDosage'><br>";
    var addHTML5 = "<p>Number of Days Taken:</p><input type='text' id='medNumDays'><br>";
    var addHTML6 = "<p>Time of Day Taken:</p><input type='text' id='medTime'><br>";
    var addHTML7 = "<p>Total Cost:</p><input type='text' id='medCost'><br>";


    var total = addHTML1 + addHTML2 + addHTML3 + addHTML4 + addHTML5 + addHTML6 + addHTML7;
    alert("This is var total " + total);
    document.getElementById("addMedicationDiv").innerHTML = total;
}


function getType() {
    // alert("getType() was called.");
    document.getElementById("displayType").innerHTML = window.localStorage.getItem("type");
}

function getDate() {
    // alert("getDate() was called.");
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

function loadCycle() {
    // alert("loadCycle() called.");
    getType();
    getDate();
}


function saveCycle() {
    setDate();
    setType();
}

function clearCycle() {
    alert("clearCycle() called.");
    window.localStorage.removeItem("type");
    window.localStorage.removeItem("date");

    document.getElementById("date").value = "";
}
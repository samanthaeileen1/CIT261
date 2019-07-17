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
}

function addMedication() {
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
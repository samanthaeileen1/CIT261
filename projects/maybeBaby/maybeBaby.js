function setDate() {
    alert("setDate() has been called.");
    var userDate = document.getElementById("date").value;
    window.localStorage.setItem("date", userDate);
    alert("Here is userDate " + userDate);
}

function setType() {
    alert("setType has been called.");
    var userType = document.getElementById("type").value;
    window.localStorage.setItem("type", userType);
    alert("Here is type " + userType);

}

function addAppointment() {
}

function addMedication() {
}


function getType() {
    alert("getType() was called.");
    document.getElementById("displayType").innerHTML = window.localStorage.getItem("type");
}

function getDate() {
    alert("getDate() was called.");
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

function loadCycle() {
    alert("loadCycle() called.");
    getType();
    getDate();
}


function saveCycle() {
    setDate();
    setType();
}

function clearCycle() {
    window.localStorage.removeItem("type");
    window.localStorage.removeItem("date");

    document.getElementById("date").innerHTML = "";
}
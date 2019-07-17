function setDate() {
    alert("setDate() has been called.");
    var userDate = document.getElementById("date").value;
    window.localStorage.setItem("date", userDate);
    alert("Here is userDate " + userDate);
}

function setType() {
    var type = document.getElementById("type").value;
    window.localStorage.setItem("type", type);

}

function addAppointment() {
}

function addMedication() {
}


function getType() {
    document.getElementById("displayType").innerHTML = window.localStorage.getItem("type");
}

function getDate() {
    alert("getDate() was called.");
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

function loadCycle() {
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
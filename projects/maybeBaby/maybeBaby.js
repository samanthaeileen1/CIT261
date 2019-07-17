function setDate() {
    var date = document.getElementById("date").value;
    window.localStorage.setItem("date", date);
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
    document.getElementById("displayDate").innerHTML = window.localStorage.getItem("date");
}

function loadCycle() {
    getType();
    getDate();
}
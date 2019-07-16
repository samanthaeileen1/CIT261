function getType() {
    var type = document.getElementById("type").value;
    return type;
}

function getDate() {
    var date = document.getElementById("date").value;
    return date;
}


function setDate() {
    document.getElementById("div1").innerHTML = getDate;
}

function setType() {
    document.getElementById("div2").innerHTML = getType;
}


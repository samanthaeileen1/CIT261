function getType() {
    var type1 = document.getElementById("type").value;
    return type1;
}

function getDate() {
    var date = document.getElementById("date").value;
    return date;
}


function setDate() {
    document.getElementById("div1").innerHTML = document.getElementById("date").value;
}

function setType() {
    document.getElementById("div2").innerHTML = getType;
}


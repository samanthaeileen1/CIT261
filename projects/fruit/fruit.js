function setFruit() {
    // Store
    var fruit = document.getElementById("fruit").value;
    window.localStorage.setItem("favFruit", fruit); //don't forget to put WINDOW!
    
    }
    
    function getFruit() {
    // Retrieve
    document.getElementById("displayFruit").innerHTML = window.localStorage.getItem("favFruit");
    var fruit = window.localStorage.getItem("favFruit");
    if (fruit === "banana" || fruit === "Banana") {
        document.getElementById("picture").innerHTML = "<img src='banana.jpeg' height='480' width='480'>"
    }

    if (fruit === "bananas" || fruit === "Bananas") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "orange" || fruit === "Orange" || fruit === "oranges" || fruit === "Oranges" ) {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "pear" || fruit === "Pear" || fruit === "pears" || fruit === "Pears" ) {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "peach" || fruit === "Peach" || fruit === "Peaches" || fruit === "peaches" ) {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "cherries" || fruit === "Cherries") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "pineapple" || fruit === "Pineapple" || fruit === "pineapples" || fruit === "Pineapples" ) {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "raspberries" || fruit === "Raspberries") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "blueberries" || fruit === "Blueberries") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "stawberries" || fruit === "Strawberries") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    if (fruit === "mango" || fruit === "Mango" || fruit === "Mangos" || fruit === "mangos" ) {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }

    
    }
    
    function removeFruit() {
    //Removal
    window.localStorage.removeItem("favFruit");
    document.getElementById("displayFruit").innerHTML = "";
    document.getElementById("picture").innerHTML = "";
    }
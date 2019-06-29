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
        document.getElementById("picture").innerHTML = "<img src='banana.jpeg' height='480' width='480'>";
        var banana = new Fruit("yellow", true, "trees", false);
        banana.display();
    }

    if (fruit === "bananas" || fruit === "Bananas") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpg' height='480' width='480'>";
        var banana = new Fruit("yellow", true, "trees", false);
    }

    if (fruit === "orange" || fruit === "Orange" || fruit === "oranges" || fruit === "Oranges" ) {
        document.getElementById("picture").innerHTML = "<img src='orange.jpg' height='480' width='600'>";
        var orange = new Fruit("orange", true, "trees", false);
        orange.display();
    }

    if (fruit === "apple" || fruit === "Apple" || fruit === "Apples" || fruit === "apples" ) {
        document.getElementById("picture").innerHTML = "<img src='apple.jpg' height='480' width='480'>";
        var apple = new Fruit("red, green, yellow", false, "trees", false);
        apple.display();
    }
    

    if (fruit === "pear" || fruit === "Pear" || fruit === "pears" || fruit === "Pears" ) {
        document.getElementById("picture").innerHTML = "<img src='pear.jpg' height='480' width='480'>";
        var pear = new Fruit("green, red, brown", false, "trees", false);
        pear.display();
    }

    if (fruit === "peach" || fruit === "Peach" || fruit === "Peaches" || fruit === "peaches" ) {
        document.getElementById("picture").innerHTML = "<img src='peach.jpg' height='480' width='480'>";
        var peach = new Fruit("orange, yellow", false, "trees", false);
        peach.display();
    }

    if (fruit === "cherries" || fruit === "Cherries") {
        document.getElementById("picture").innerHTML = "<img src='cherries.jpg' height='480' width='480'>";
        var cherry = new Fruit("red, purple", false, "trees", false);
        cherry.display();
    }

    if (fruit === "pineapple" || fruit === "Pineapple" || fruit === "pineapples" || fruit === "Pineapples" ) {
        document.getElementById("picture").innerHTML = "<img src='pineapple.jpg' height='480' width='480'>";
        var pineapple = new Fruit("yellow", true, "trees", false);
        pineapple.display();
    }

    if (fruit === "raspberries" || fruit === "Raspberries") {
        document.getElementById("picture").innerHTML = "<img src='raspberries.jpg' height='480' width='510'>";
        var raspberry = new Fruit("red", false, "bushes", true);
        raspberry.display();
    }

    if (fruit === "blueberries" || fruit === "Blueberries") {
        document.getElementById("picture").innerHTML = "<img src='blueberries.jpg' height='480' width='480'>";
        var blueberry = new Fruit("blue", false, "bushes", true);
        blueberry.display();
    }

    if (fruit === "blackberries" || fruit === "Blackberries") {
        document.getElementById("picture").innerHTML = "<img src='blackberries.jpg' height='480' width='530'>";
        var blackberry = new Fruit("blackish purplely blue", false, "bushes", true);
        blackberry.display();
    }

    if (fruit === "strawberries" || fruit === "Strawberries") {
        document.getElementById("picture").innerHTML = "<img src='strawberries.jpg' height='480' width='530'>";
        var strawberries = new Fruit("red", false, "bushes", true);
        strawberries.display();
    }

    if (fruit === "mango" || fruit === "Mango" || fruit === "Mangoes" || fruit === "mangoes" ) {
        document.getElementById("picture").innerHTML = "<img src='mango.jpg' height='480' width='530'>";
        var mango = new Fruit("orange, yellow, red, green", true, "trees", false);
        mango.display();
    }

    if (fruit === "grape" || fruit === "Grape" || fruit === "grapes" || fruit === "Grapes" ) {
        document.getElementById("picture").innerHTML = "<img src='grapes.jpg' height='480' width='530'>"
        var grape = new Fruit("green, purple", false, "vine", true);
        grape.display();
    }


    }
    
    function removeFruit() {
    //Removal
    window.localStorage.removeItem("favFruit");
    document.getElementById("displayFruit").innerHTML = "";
    document.getElementById("picture").innerHTML = "";
    }




    function Fruit(color, peel, growth, berry) {
        this.color  = color;
        this.peel   = peel;
        this.growth = growth;
        this.berry  = berry; 
        
        this.display = function() {
            if (this.peel === true) {
                this.peel = "yes";
            }
            else {
                this.peel = "no";
            }

            if (this.berry === true) {
                this.berry = "yes";
            }
            else {
                this.berry = "no";
            }

           var fruitProfile =
            "<h5>Fruit Profile</h5>" +
            "Color(s): "      + this.color  + "<br>" +
            "Thick Peel: "    + this.peel   + "<br>" +
            "Growing Place: " + this.growth + "<br>" + 
            "Berry: "         + this.berry  + "<br>";

            document.getElementById("profile").innerHTML = fruitProfile;

        }

    }
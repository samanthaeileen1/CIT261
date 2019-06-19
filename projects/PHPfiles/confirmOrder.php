<html>
<body>

<head>

   <meta charset="utf-8">
   <meta name="viewpoint" content="width=device-width, intial-scale=1">
   <link href="orderForm.css" rel="stylesheet">

   <title>Order Confirmation</title>

</head>
<body style="text-align: center;">

<?php

$fName   = $_GET['firstname']; 
$lName   = $_GET['lastname'];
$phone   = $_GET['phone'];
$cType   = $_GET['cardType'];
$year    = $_GET['cardDateYear'];
$month   = $_GET['cardDateMonth'];
$address = $_GET['address'];
$total   = $_GET['total'];

$stringMonth = "";
if ($month == 01) {
   $stringMonth = "January";
}
if ($month == 02) {
   $stringMonth = "February";
}
if ($month == 03) {
   $stringMonth = "March";
}
if ($month == 04) {
   $stringMonth = "April";
}
if ($month == 05) {
   $stringMonth = "May";
}
if ($month == 06) {
   $stringMonth = "June";
}
if ($month == 07) {
   $stringMonth = "July";
}
if ($month == 08) {
   $stringMonth = "August";
}
if ($month == 09) {
   $stringMonth = "September";
}
if ($month == 10) {
   $stringMonth = "October";
}
if ($month == 11) {
   $stringMonth = "November";
}
if ($month == 12) {
   $stringMonth = "December";
}



echo "<div class='container'><h2>ORDER INFO</h2>";
echo "<h3>Name: $fName" . " " . "$lName <br>";
echo "Address: $address<br>";
echo "Card Type: $cType <br>";
echo "Card Expiration Date: $stringMonth $year <br>";
echo "Phone #: $phone </h3><br><br>";

$checked = $_GET['items'];
$item = "None Selected.";
$total = 0;
for($i=0; $i < count($checked); $i++){
   echo "Selected item for $" . $checked[$i] . "<br/>";
   $total += $checked[$i];
}
echo "<h2>Your total purchase is $$total </h2> <br/>";

?>
<form action='orderSummary.php'>

 <input type="submit" id="btnSubmit" name="btnSubmit" value="Submit" />
 <input type="submit" id="btnDelete" name="btnDelete" value="Cancel" />
</div>
 </form>




  </body>
</html>
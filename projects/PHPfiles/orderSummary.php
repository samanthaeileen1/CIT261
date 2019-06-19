<html>
<body>

<head>

   <meta charset="utf-8">
   <meta name="viewpoint" content="width=device-width, intial-scale=1">
   <link href="orderForm.css" rel="stylesheet">

   <title>Order</title>

</head>
<body style="text-align: center;">

<?php

   if (isset($_GET["btnSubmit"])){
      echo "<br><br><h2>ORDER SUBMITTED!</h2>";

} else if (isset($_GET["btnDelete"])){
   echo "<br><br><h2>ORDER CANCELLED.</h2>";
}


?>

  </body>
</html>
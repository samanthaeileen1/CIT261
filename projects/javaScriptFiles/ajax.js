var httpRequest = false;
      
function makeRequest(url)
{
   url = "https://samanthaeileen1.github.io/projects/textFiles/" + url;
   //alert("This is the URL: " + url);
   httpRequest = new XMLHttpRequest();

   if (!httpRequest)
   {
      alert('ERROR: httpRequest is broken');
      return false;
   }
   else
   {
      httpRequest.onreadystatechange = formatCities;
      httpRequest.open("GET", url, true);
      httpRequest.send();
   }

}



function formatCities()

{
   //alert("Ready State = " + httpRequest.readyState);
   if (httpRequest.readyState == 4)
   {
      // alert("httpRequest.status = " + httpRequest.statusText);
      // alert("httpRequest.status = " + httpRequest.status);
      if (httpRequest.status == 200)
      {
        var cities = httpRequest.responseText.split("\n");
        var formattedCities = "<table border = '1'><tr><th>City Name and Population</th></tr>\n";

        // formattedCities = formattedCities + "<tr><td>" 
        // cities[0] + "<tr>" + "<th>" + cities [1] + 
        // cities[2] + "<tr>" + "<th>" + cities [3] +
        // cities[4] + "<tr>" + "<th>" + cities [5] + 
        // cities[6] + "<tr>" + "<th>" + cities [7] +
        // cities[8] + "<tr>" + "<th>" + cities [9] + "</td></tr>\n";

        formattedCities = formattedCities + "<tr><td>" +
        "<tr><th>" + cities[0] + "</th></tr>\n" +
        "<tr><th>" + cities[1] + "</th></tr>\n" +
        "<tr><th>" + cities[2] + "</th></tr>\n" +
        "<tr><th>" + cities[3] + "</th></tr>\n" +
        "<tr><th>" + cities[4] + "</th></tr>\n" +
        "<tr><th>" + cities[5] + "</th></tr>\n" +
        "<tr><th>" + cities[6] + "</th></tr>\n" +
        "<tr><th>" + cities[7] + "</th></tr>\n" +
        "<tr><th>" + cities[8] + "</th></tr>\n" +
        "<tr><th>" + cities[9] + "</th></tr>\n";
        document.getElementById("data").innerHTML = formattedCities;
      }
      else
      {
         alert('Status is a failure.');
         alert(httpRequest.status);
      }
   }
}

 function makeRequest2(url)
{
   url = "https://samanthaeileen1.github.io/projects/textFiles/" + url;
   //alert("This is the URL: " + url);
   httpRequest = new XMLHttpRequest();

   if (!httpRequest)
   {
      alert('ERROR: httpRequest is broken');
      return false;
   }
   else
   {
      httpRequest.onreadystatechange = formatStudents;
      httpRequest.open("GET", url, true);
      httpRequest.send();
   }

}

function formatStudents()
{
   //alert("Ready State = " + httpRequest.readyState);
   //alert("This is the httpRequest: " + httpRequest);

   if (httpRequest.readyState == 4)
   {
      //alert("httpRequest.status = " + httpRequest.statusText);
      
      if (httpRequest.status == 200)
      {
         //alert("httpRequest was goodly.");
         var myObj = JSON.parse(httpRequest.responseText);
         var list = "<table border = '1'><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

         for(var i = 0; i < myObj.students.length; i++)
         {
               list = list + "<tr><td>" 
            + myObj.students[i].first         + " "
            + myObj.students[i].last          + "</td>" + "<td>" 
            + myObj.students[i].address.city  + " " 
            + myObj.students[i].address.state + " "
            + myObj.students[i].address.zip   + "</td>" + "<td>"
            + myObj.students[i].major         + "</td>" + "<td>"
            + myObj.students[i].gpa           + "</td></tr>\n"; 
         }

         document.getElementById("list").innerHTML = list;
          

      }
      else
      {
         alert('Problem retrieving file. Go rethink life...');
         alert(httpRequest.status);
      }
   }       

}

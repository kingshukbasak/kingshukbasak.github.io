<script>
 //function for Creating an XMLHttpRequest object or ActiveXObject depending on the browser
function createXmlRequestObject()
{
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    return xmlhttp;
}
 //function for editing the data
function edit(buton) 
{  
    //getting the table element to which the edit button belongs
    var table=buton.parentElement.parentElement.parentElement.parentElement;
    //getting the form element to which the edit button belongs
    var form=table.parentElement;
    //getting the value of various fields of the form
    var name = form.name.value;
    var email = form.email.value;
    var phnum = form.phnum.value;
    var sex = form.sex.value;
    var address = form.address.value;
    var interest1 = form.interest1.value;
    var interest2 = form.interest2.value;
    var interest3 = form.interest3.value;
    var country = form.country.value;
    var state = form.state.value;
    
    xmlhttp=createXmlRequestObject();
    //Create the function to be executed when the server response is ready
    xmlhttp.onreadystatechange = function() {
    //checking for readyState to b 4(request finished and response is ready) and xmlhttp status to be 200(OK)
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
    //converting the response string to a JSON object
            var obj = JSON.parse(xmlhttp.responseText);
            for (var i in obj) 
                //setting the value of the form input fileds as per the response string
                 form[i].value =obj[i];
            table.style.borderColor='black';
        }
    };
    //creating the parameter string to be sent as POST data
    var params = "name="+name+"&email="+email+"&phnum="+phnum+"&interest1="+interest1+"&interest2="+interest2+"&interest3="+interest3+"&sex="+sex+"&country="+country+"&state="+state+"&address="+address+"&edit=true";
    // method used to open the connection mentioning type, the page to which data is to be sent and asynchronously
    xmlhttp.open("POST", "manipulate.php", true);
    //encoding the parameter string
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //sending the Post request
    xmlhttp.send(params);
}
//function for deleting the data
function del(buton) 
{  
    //getting the form element to which the edit button belongs
    var form=buton.parentElement.parentElement.parentElement.parentElement.parentElement;
    //getting the value of email from the form as it is the primary key
    var email = form.email.value;
    xmlhttp=createXmlRequestObject();
    //Create the function to be executed when the server response is ready
    xmlhttp.onreadystatechange = function() {
        //checking for readyState to b 4(request finished and response is ready) and xmlhttp status to be 200(OK)
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //removing the form as per the response text
            if(xmlhttp.responseText=="success")
               document.body.removeChild(form);
        }
    };
    //creating the parameter string to be sent as POST data
    var params = "email="+email+"&delete=true";
    // method used to open the connection mentioning type, the page to which data is to be sent and asynchronously
    xmlhttp.open("POST", "manipulate.php", true);
    //encoding the parameter string
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //sending the Post request
    xmlhttp.send(params);
      
}
function changecolor(table)
{
   table.style.borderColor='red';
}

</script>

<?php
//opening connection to the mysql server providing the url,username,password and database name
$conn = new mysqli("localhost", "root", "", "formData");
if ($conn->connect_error) 
die("Connection failed: " . $conn->connect_error);
//creating the query string to be fired for selection of data from the database
$sql = "SELECT * FROM primaryTable";
//storing the result set into a variable
$result = $conn->query($sql);
//if the result set is not null
if ($result->num_rows > 0) 
{
    //creaing the html dynamically
    echo "<table border=1 ><tr><th width='138px'>NAME</th><th width='172px'>EMAIL</th><th width='89px'>PHNUM</th><th width='61px'>SEX</th><th width='102px'>INTEREST1</th><th width='103px'>INTEREST2</th><th width='104px'>INTEREST3</th><th width='138px'>COUNTRY</th><th width='139px'>STATE</th><th width='134px'>ADDRESS</th></tr></table>";
    //traversing each row of the result set
    while($row = $result->fetch_assoc()) 
    {       
    	$email=$row['email'];
        //var_dump($row);
        $count=0;
        //creating the query string to be fired for selection of interest from the database
    	$sql1 = "SELECT interest FROM interest where email='$email'";
    	$result1=$conn->query($sql1);
        echo "<form method='post' id=".$count.">";
        echo "<table border=1 onkeypress='changecolor(this)'><tr><td><input type='text' name='name' size='15px' value='".$row["name"]."'></td><td><input type='text' name='email' size='20px'  value='".$row["email"]."' readonly=readonly></td><td><input type='text' name='phnum' size='8px'  value='".$row["phnum"]."'></td><td><input type='text' name='sex' size='4px' value='".$row["sex"]."'></td>";       
        while($row1= $result1->fetch_assoc())
        {
            $count++;
            echo "<td><input type='text' size='10px' name='interest".$count."' value='".$row1["interest"]."'></td>";
            
        }

        echo"<td><input type='text' name='country' size='15px' value='".$row["country"]."'></td><td><input type='text' size='15px' name='state' value='".$row["state"]."'></td><td><input type='text' name='address' size='15px' value='".$row["address"]."'></td>";
        echo "<td><input type='button'value='edit' onclick='edit(this)'></td><td><input type='button' value='delete' onclick='del(this)'></td></tr></table></form>";
    }
    
} else 
    echo "0 results";

$conn->close();
?>


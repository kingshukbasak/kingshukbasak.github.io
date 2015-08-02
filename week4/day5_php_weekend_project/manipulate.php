<?php

$email=$_POST["email"];
$conn = new mysqli("localhost", "root", "", "formData");
if ($conn->connect_error) 
die("Connection failed: " . $conn->connect_or);
//if the button pressed is delete
if(isset($_POST["delete"]))
 {
     

        $sql = "Delete from interest where email='$email'"; 
        $conn->query($sql);
        $sql = "Delete from primaryTable where email='$email'";
        $conn->query($sql);
        echo "success";
 }
 //if the button pressed is edit
 if(isset($_POST["edit"]))
 {
//fetching values from the POST global object w.r.t to proper key name     
$name=$_POST["name"];
$phnum=$_POST["phnum"];
$sex=$_POST["sex"];
$interest1=$_POST["interest1"];
$interest2=$_POST["interest2"];
$interest3=$_POST["interest3"];
$country=$_POST["country"];
$state=$_POST["state"];
$address=$_POST["address"];
//updating the interest table
$sql = "Update interest set interest='$interest1' where email='$email' and id='1'";
$conn->query($sql);
$sql = "Update interest set interest='$interest2' where email='$email' and id='2'";
$conn->query($sql);
$sql = "Update interest set interest='$interest3' where email='$email' and id='3'";
$conn->query($sql);
//updating the primary table        
$sql = "Update primaryTable set name='$name' , phnum='$phnum' , sex='$sex' ,country='$country', state='$state', address='$address' where email='$email'";
$conn->query($sql);
 
//echoing back the output string to the .js page
 $output='{"name":"'.$name.'","phnum":"'.$phnum.'","email":"'.$email.'","sex":"'.$sex.'","interest1":"'.$interest1.'","interest2":"'.$interest2.'","interest3":"'.$interest3.'","country":"'.$country.'","state":"'.$state.'","address":"'.$address.'"}';  
 echo $output;
 
 }   
 //closing the connection with database server
 $conn->close();
?>
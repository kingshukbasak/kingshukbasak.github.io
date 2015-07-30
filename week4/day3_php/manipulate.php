<?php
$name=$_POST["name"];
$email=$_POST["email"];
$phnum=$_POST["phnum"];
$sex=$_POST["sex"];
$interest1=$_POST["interest1"];
$interest2=$_POST["interest2"];
$interest3=$_POST["interest3"];
$country=$_POST["country"];
$state=$_POST["state"];
$address=$_POST["address"];

$conn = new mysqli("localhost", "root", "", "formData");

	if ($conn->connect_error) 
    	die("Connection failed: " . $conn->connect_error);
 if(isset($_POST["delete"]))
 {
     

        $sql = "Delete from interest where email='$email'"; echo $sql;
        $conn->query($sql);
        $sql = "Delete from primaryTable where email='$email'";
        $conn->query($sql);
 }
  if(isset($_POST["edit"]))
 {
        
        
            $sql = "Update interest set interest='$interest1' where email='$email' and id='0'";
            $conn->query($sql);
            $sql = "Update interest set interest='$interest2' where email='$email' and id='1'";
            $conn->query($sql);
            $sql = "Update interest set interest='$interest3' where email='$email' and id='2'";
            $conn->query($sql);
        
        $sql = "Update primaryTable set name='$name' , phnum='$phnum' , sex='$sex' ,country='$country', state='$state', address='$address' where email='$email'";
        $conn->query($sql);
 }
 $conn->close();       
 header("Location:fetch.php");
    
?>
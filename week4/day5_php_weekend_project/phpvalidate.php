<?php
    //setting all the error variables to blank string initially
    $stateErr=$nameErr=$addressErr=$emailErr=$phnumErr=$interestErr=$countryErr=$sexErr="";
    //setting floag used latter for writing data into the data base if no error founf in the inputs
    $flag=0;
    //checking if server request is of type post
   if ($_SERVER["REQUEST_METHOD"] == "POST")  
       {
       //checking the value of the POST global object against various key. If the value is not set then proper message is assigned
       //the error variable and flag is raised 
            if (empty($_POST["name"]))
                {
                    $nameErr = "Name_is_required";
                    $flag=1;
                 } 
             if (empty($_POST["email"])) 
                 {
                     $emailErr = "Email_is_required";
                     $flag=1;
                 } 
             else 
                 {
                 //validating legal email
                    if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
                        {
                            $emailErr = "Email_is_incorrect";
                            $flag=1;
                         }
                  }
            if (empty($_POST["phnum"]))
                {
                        $phnumErr = "PhNum_is_required";
                        $flag=1;
                 } 
            else 
                {
                //validating length of phnum is 10 and it is a positive integer number
                    if(strlen($_POST["phnum"])!=10 || !is_numeric($_POST["phnum"]) || (int)$_POST["phnum"]<0)
                    {
                        $phnumErr = "PhNum_is_incorrect";
                        $flag=1;
                    }
                }
            if (empty($_POST["sex"])) 
                {
                    $sexErr = "Sex_is_required";
                    $flag=1;
                } 
            if (empty($_POST["interest1"]) && empty($_POST["interest2"]) && empty($_POST["interest3"]))
                {
                    $interestErr = "Interest_is_required";
                    $flag=1;
                } 
    
            if (empty($_POST["country"]))
                {
                    $countryErr = "Country_is_required";
                    $flag=1;
                } 
            if (empty($_POST["address"])) 
                {
                    $addressErr = "Address_is_required";
                    $flag=1;
                }   

            if (empty($_POST["state"]))
                {
                    $stateErr = "State_is_required";
                    $flag=1;
                } 
   //echoing back the error string to the .js page with appropiate values set.
            if($flag==1)
            { 
                $output='{"nameErr":"'.$nameErr.'","phnumErr":"'.$phnumErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'"}';
                echo $output;
            }
}
 
//following code executed if there is no error in the input
if($flag==0)
{
        $name=$_POST['name'];
	$email=$_POST["email"];
	$phnum=$_POST["phnum"];
	$sex=$_POST["sex"];
	$country=$_POST["country"];
	$state=$_POST["state"];
	$address=$_POST["address"];
	$interest1=$_POST["interest1"];
        $interest2=$_POST["interest2"];
        $interest3=$_POST["interest3"];
        //opening connection to the mysql server providing the url,username,password and database name
        $conn = new mysqli("localhost", "root", "", "formData");
        if ($conn->connect_error) 
    	die("Connection failed: " . $conn->connect_error);
        //creating the query string to be fired for insertion of inputs into the database
        $sql = "INSERT INTO primaryTable VALUES ('$name','$email',$phnum,'$sex','$country','$state','$address')";
        //if the query is successful
        if ($conn->query($sql) === TRUE) 
   		 {   
            //insertion of interests value to another table
                    $sql1= "INSERT INTO interest VALUES('1','$email','$interest1')"; 
                    $conn->query($sql1);
                    $sql1= "INSERT INTO interest VALUES('2','$email','$interest2')"; 
                    $conn->query($sql1);
                    $sql1= "INSERT INTO interest VALUES('3','$email','$interest3')"; 
                    $conn->query($sql1);
                    $status="SUCCESSFULLY SUBMITTED";
                
                  }
        else 
                    $status="duplicate email exists";
        //closing the connection
        $conn->close();
        $output='{"nameErr":"'.$nameErr.'","phnumErr":"'.$phnumErr.'","emailErr":"'.$emailErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'","status":"'.$status.'"}';
        //echoing back the output string to the .js page
        echo $output;
}




 
?>
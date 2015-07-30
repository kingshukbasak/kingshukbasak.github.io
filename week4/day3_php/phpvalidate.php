<?php
// define variables and set to empty values

    session_start();
    $_SESSION["name"]=$_SESSION["phnum"]=$_SESSION["email"]=$_SESSION["country"]=$_SESSION["state"]=$_SESSION["address"]=$_SESSION["interest"]=$_SESSION["sex"]="";
    $_SESSION["stateErr"]=$_SESSION["nameErr"]=$_SESSION["addressErr"]=$_SESSION["emailErr"]=$_SESSION["phnumErr"]=$_SESSION["interestErr"]=$_SESSION["countryErr"]=$_SESSION["sexErr"]="";
    $_SESSION["phpHit"]="set";
    $flag=0;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "Name_is_required";
     $_SESSION["nameErr"]= $nameErr;
     $flag=1;
    } else {
     $_SESSION["name"] = test_input($_POST["name"]);
   }
   if (empty($_POST["email"])) {
     $emailErr = "Email_is_required";
     $_SESSION["emailErr"]= $emailErr;
     $flag=1;
    } else {
      
     $_SESSION["email"] = test_input($_POST["email"]);
     if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
         {
          $emailErr = "Email_is_incorrect";
          $_SESSION["emailErr"]= $emailErr;
          $flag=1;
        }
   }
   if (empty($_POST["phnum"])) {
     $phnumErr = "PhNum_is_required";
     $_SESSION["phnumErr"]= $phnumErr;
     $flag=1;
    } else {
     $_SESSION["phnum"] = test_input($_POST["phnum"]);
     if(strlen($_POST["phnum"])!=10)
     {$phnumErr = "PhNum_is_incorrect";
        $_SESSION["phnumErr"]= $phnumErr;
        $flag=1;
     }
   }
   if (empty($_POST["sex"])) {
     $sexErr = "Sex_is_required";
     $_SESSION["sexErr"]= $sexErr;
     $flag=1;
    } else {  
              $_SESSION["sex"]=($_POST["sex"]);
              if($_POST["sex"]=='male')
                $_SESSION["sexMale"] = ($_POST["sex"]); 
              else if($_POST["sex"]=='female')
                $_SESSION["sexFemale"] =($_POST["sex"]); 
   }
   if (empty($_POST["interest"])) {
     $interestErr = "Interest_is_required";
     $_SESSION["interestErr"]= $interestErr;
     $flag=1;
    } else {
        foreach($_POST['interest'] as $check) 
            $_SESSION["interest"].= $check."\t";
            
   }
   if (empty($_POST["country"])) {
     $countryErr = "Country_is_required";
     $_SESSION["countryErr"]= $countryErr;
     $flag=1;
    } else {
     $_SESSION["country"] = test_input($_POST["country"]);
   }
   if (empty($_POST["address"])) {
     $addressErr = "Address_is_required";
     $_SESSION["addressErr"]= $addressErr;
     $flag=1;
    } else {
     $_SESSION["address"]= ($_POST["address"]);
   }
   
   if (empty($_POST["states"])) {
     $stateErr = "State_is_required";
     $_SESSION["stateErr"]= $stateErr;
     $flag=1;
    } else {
     $_SESSION["state"]= ($_POST["states"]);
   }
   
   
   
}

if($flag==0)
{
  // unlink('data.csv');
  // $csvdata="name:".$_SESSION["name"].",email:".$_SESSION["email"].",phone_number:".$_SESSION["phnum"].",sex:".$_SESSION["sex"].",interest:".$_SESSION["interest"].",country:".$_SESSION["country"].",state:".$_SESSION["state"].",address:".$_SESSION["address"];
  // $fp = fopen("data.csv","a"); 
  // if($fp)
  // {
  //   fwrite($fp,$csvdata); 
  //       fclose($fp); 
        
  // }
  // 	
  // $_SESSION["name"]=$_SESSION["phnum"]=$_SESSION["email"]=$_SESSION["country"]=$_SESSION["state"]','=$_SESSION["address"]=$_SESSION["interest"]="";
  // unset($_SESSION["sexMale"]); unset($_SESSION["sexFemale"]);
	$name=$_SESSION['name'];
	$email=$_SESSION["email"];
	$phnum=$_SESSION["phnum"];
	$sex=$_SESSION["sex"];
	$country=$_SESSION["country"];
	$state=$_SESSION["state"];
	$address=$_SESSION["address"];
	$interest=$_SESSION["interest"];
	//$len=sizeof($interest);
	

	$conn = new mysqli("localhost", "root", "", "formData");

	if ($conn->connect_error) 
    	die("Connection failed: " . $conn->connect_error);
		 

			
    $sql = "INSERT INTO primaryTable VALUES ('$name','$email',$phnum,'$sex','$country','$state','$address')";

    if ($conn->query($sql) === TRUE) 
   		 {
   		 	$_SESSION["success"]="successfully inserted"; 

			$_SESSION["name"]=$_SESSION["phnum"]=$_SESSION["email"]=$_SESSION["country"]=$_SESSION["state"]=$_SESSION["address"]=$_SESSION["interest"]="";
			unset($_SESSION["sexMale"]); unset($_SESSION["sexFemale"]);
   		
                       
                 
                            $count=0;
              foreach($_POST['interest'] as $check)
   		 {
   		 	
    		$sql1= "INSERT INTO interest VALUES('$count','$email','$check')"; echo $sql1;
    		if ($conn->query($sql1) === FALSE)
    				$_SESSION["success"]="error in interest";
                $count++;
                }
                for($i=$count;$i<3;$i++)
                {
                    $sql1= "INSERT INTO interest VALUES('$i','$email','-')";
    		if ($conn->query($sql1) === FALSE)
    				$_SESSION["success"]="error in interest";
                
                }
                
                  }
		 else 
    		$_SESSION["success"]="duplicate email exists";

	$conn->close();

	
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

 header("Location:index.php");
?>
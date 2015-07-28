<?php
// define variables and set to empty values

    session_start();
    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "Name_is_required";
     $_SESSION["nameErr"]= $nameErr;
    } else {
     $_SESSION["name"] = test_input($_POST["name"]);
   }
   if (empty($_POST["email"])) {
     $emailErr = "Email_is_required";
     $_SESSION["emailErr"]= $emailErr;
    } else {
      
     $_SESSION["email"] = test_input($_POST["email"]);
     if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
         {
          $emailErr = "Email_is_incorrect";
          $_SESSION["emailErr"]= $emailErr;
          echo "email error";
        }
   }
   if (empty($_POST["phnum"])) {
     $phnumErr = "PhNum_is_required";
     $_SESSION["phnumErr"]= $phnumErr;
    } else {
     $_SESSION["phnum"] = test_input($_POST["phnum"]);
     if(strlen($_POST["phnum"])!=10)
         $phnumErr = "PhNum_is_incorrect";
        $_SESSION["phnumErr"]= $phnumErr;
   }
   if (empty($_POST["sex"])) {
     $sexErr = "Sex_is_required";
     $_SESSION["sexErr"]= $sexErr;
    } else {  
              $_SESSION["sex"]=test_input($_POST["sex"]);
              if($_POST["sex"]=='male')
                $_SESSION["sexMale"] = test_input($_POST["sex"]); 
              else if($_POST["sex"]=='female')
                $_SESSION["sexFemale"] = test_input($_POST["sex"]); 
   }
   if (empty($_POST["interest"])) {
     $interestErr = "Interest_is_required";
     $_SESSION["interestErr"]= $interestErr;
    } else {
     $_SESSION["interest"] = test_input($_POST["interest"]);
   }
   if (empty($_POST["country"])) {
     $countryErr = "Country_is_required";
     $_SESSION["countryErr"]= $countryErr;
    } else {
     $_SESSION["country"] = test_input($_POST["country"]);
   }
   if (empty($_POST["address"])) {
     $addressErr = "Address_is_required";
     $_SESSION["addressErr"]= $addressErr;
    } else {
     $_SESSION["address"]= test_input($_POST["address"]);
   }
   
}

  unlink('data.csv');
   $csvdata="name:".$_SESSION["name"].",phone_number:".$_SESSION["phnum"].",email:".$_SESSION["email"].",country:".$_SESSION["country"].",state:".$_SESSION["state"].",address:".$_SESSION["address"].",interest:".$_SESSION["interest"].",sex:".$_SESSION["sex"];
  $fp = fopen("data.csv","a"); 
  if($fp)
  {
    fwrite($fp,$csvdata); 
        fclose($fp); 
        
  }

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

 header("Location:intermediate.php");
?>
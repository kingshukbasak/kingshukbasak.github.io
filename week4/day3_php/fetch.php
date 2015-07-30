
<?php

$conn = new mysqli("localhost", "root", "", "formData");

	if ($conn->connect_error) 
    	die("Connection failed: " . $conn->connect_error);

$sql = "SELECT * FROM primaryTable";

$result = $conn->query($sql);


if ($result->num_rows > 0) 
{
    echo "<table  border='1px'><tr><th>NAME</th><th>EMAIL</th><th>PHNUM</th><th>SEX</th><th>INTEREST1</th><th>INTEREST2</th><th>INTEREST3</th><th>COUNTRY</th><th>STATE</th><th>ADDRESS</th></tr></table>";
    
    while($row = $result->fetch_assoc()) 
    {
        
    	$email=$row['email'];
        $count=0;
    	$sql1 = "SELECT interest FROM interest where email='$email'";
    	$result1=$conn->query($sql1);
        echo "<form method='post' action='manipulate.php'>";
        echo "<table border='1px'><tr><td><input type='text' name='name' value=".$row["name"]."></td><td><input type='text' name='email'  value=".$row["email"]."></td><td><input type='text' name='phnum'  value=".$row["phnum"]."></td><td><input type='text' name='sex' value=".$row["sex"]."></td>";
        while($row1= $result1->fetch_assoc())
        {
            $count++;
            echo "<td><input type='text' name='interest".$count."' value=".$row1["interest"]."></td>";
            
        }
//        for($i=$count;$i<3;$i++)
//            echo "<td><input type='text' name='".$i."'value='-'</td>";
        echo"<td><input type='text' name='country' value=".$row["country"]."></td><td><input type='text' name='state' value=".$row["state"]."></td><td><input type='text' name='address' value=".$row["address"]."></td>;
        <td><button type='submit' name='edit' value='edit' >EDIT</button></td><td><button type='submit' name='delete' value='delete' >DELETE</button></td></tr></table></form>";
    }
    //echo "</table></form>";
} else 
    echo "0 results";

$conn->close();
?>

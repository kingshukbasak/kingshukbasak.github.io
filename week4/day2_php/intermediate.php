<!DOCTYPE html>
<html>
<?php session_start() ?>
<head>
    <link href="intermediateCSS.css" rel="stylesheet" type="text/css">

    <title></title>
</head>

<body <?php if(isset($_SESSION["phpHit"])) echo "onload=change('tab2')"?>>
  <div style="position:absolute; top:50px; left:80px;">
      

    <div>
        <ul>
            <li  onclick="change('tab1')" id="tab1">
                News
            </li>

            <li  onclick="change('tab2')" id="tab2">
                Subscribe
            </li>
        </ul>
    </div>

    <div class="maindiv1" id="maindiv1" >
        <div class="innerdiv">
            <h2>Welcome</h2>

            <p>Simple and effective AngularJS binding for
            FusionCharts java script charting library.Simple
            and effective AngularJS bindings for FusonCharts
            JavaScript Charting Library.</p>

            <p style="color:#3399FF;">AngularJS bindings for FusonCharts
            JavaScript Charting Library.</p>
        </div>

        <div class="innerdiv">
        <h2>Latest News</h2><img src="image.jpg"></div>

        <div id='learn'>
            <p style="color:white;">LEARN
            MORE</p>
        </div>
    </div>
    <div class="maindiv2" id="maindiv2" >
        <div class=innerdiv1 >
         <form method="post" action="phpvalidate.php" id="form1">
            <div class=innerdiv1Inside id="innerleft">
                <h2>Subscription Form</h2>
                <table width="270" height="200" >
                        <tr><td>Name</td><td><input type="text" id="name" name="name" value=<?php if(isset($_SESSION["name"])) echo $_SESSION["name"];?> >
                        <span><?php if(isset($_SESSION["nameErr"]))echo $_SESSION["nameErr"];?></span></td></tr>
                        <tr><td>Email</td><td><input type="text" id="email"  name="email" value=<?php if(isset($_SESSION["email"])) echo $_SESSION["email"];?>>
                        <span><?php if(isset($_SESSION["emailErr"]))echo $_SESSION["emailErr"];?></span></td></tr>
                        <tr><td>PhNum</td><td><input type="text" id="phno"  maxlength="13" name="phnum" value=<?php if(isset($_SESSION["phnum"])) echo $_SESSION["phnum"];?>>
                       <span><?php if(isset($_SESSION["phnumErr"]))echo $_SESSION["phnumErr"];?></span></td></tr>
                        <tr><td>Sex</td><td><input type="radio" id="sex" value="male" name="sex" <?php if(isset($_SESSION["sexMale"])) echo "checked"?>>Male<input type="radio" name="sex" id="sex" value="female" <?php if(isset($_SESSION["sexFemale"])) echo "checked"?>>Female
                        <span><?php if(isset($_SESSION["sexErr"]))echo $_SESSION["sexErr"];?></span></td></tr>
                        <tr><td>Interest</td>
                        <td><input type="checkbox" name="interest[]" value="sports" onclick="" <?php if((isset($_SESSION["interest"]))&&(strpos($_SESSION["interest"],'sports') !== false))echo "checked";?>>Sports
                        <input type="checkbox" name="interest[]" value="movie" onclick="" <?php if((isset($_SESSION["interest"]))&&(strpos($_SESSION["interest"],'movie') !== false))echo "checked";?>>Movie
                        <input type="checkbox" name="interest[]" value="reading" onclick="" <?php if((isset($_SESSION["interest"]))&&(strpos($_SESSION["interest"],'reading') !== false))echo "checked";?>>Reading
                        <span><?php if(isset($_SESSION["interestErr"]))echo $_SESSION["interestErr"];?></span></td></tr>
                </table>
            </div>
            <div class=innerdiv1Inside id="innerright">
                
                <table width="270" height="170" >
                        
                        <tr><td>Country</td><td><select id="country" name="country" onchange="getstate(this)">
                                              <option disabled selected></option>
                                              <option value="india" <?php if((isset($_SESSION["country"]))&&($_SESSION["country"]=='india'))echo "selected='selected'";?>>India</option>
                                              <option value="usa" <?php if((isset($_SESSION["country"]))&&($_SESSION["country"]=='usa'))echo "selected='selected'";?>>USA</option>
                                            </select>
                                            <span><?php if(isset($_SESSION["countryErr"]))echo $_SESSION["countryErr"];?></span><span></td></tr>

                        <tr><td>State</td><td><select id="states" name="states" value="" name="states" disabled>
                                             
                                            </select>
                            <span><?php if(isset($_SESSION["state"]))echo $_SESSION["stateErr"];?></span></td></tr>
                        <tr><td>Address</td><td><textarea rows='10' id="address" name="address"><?php if(isset($_SESSION["address"]))echo $_SESSION["address"];?></textarea >
                        <span><?php if(isset($_SESSION["addressErr"]))echo $_SESSION["addressErr"];?></span></td></tr>
                </table>
            </div>
            
                <button type="submit" class=subscribe >SUBSCRIBE</button>
                <button type="reset" class=reset>RESET</button>
            
        </form>
        </div>
    </div>
    <div class="model" id="model" >
            <div class=selectinterest id="sports" value="sports">
                    <h2>SELECT SPORTS</h2>
                        <input type="checkbox" name="fs" value="cricket">Cricket
                        <input type="checkbox" name="fs" value="hockey">Hockey
                        <input type="checkbox" name="fs" value="golf">Golf
                        <input type="checkbox" name="fs" value="video games">Football
                        <input type="checkbox" name="fs" value="bowling">Bowling
                        <input type="checkbox" name="fs" value="others">Others
                     
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
            <div class=selectinterest id="movie" value="movie ">
                    <h2>SELECT GENRE</h2>
                        <input type="checkbox" name="fs" value="thriller">Thriller
                        <input type="checkbox" name="fs" value="sci-fi">Sci-fi
                        <input type="checkbox" name="fs" value="action">Action
                        <input type="checkbox" name="fs" value="comedy">Comedy
                        <input type="checkbox" name="fs" value="romantic">Horror
                        <input type="checkbox" name="fs" value="others">Others
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
             <div class=selectinterest id="reading" value="reading">
                    <h2>SELECT GENRE</h2>
                    <input type="checkbox" name="fs" value="satire">Satire
                        <input type="checkbox" name="fs" value="fiction">Fiction
                        <input type="checkbox" name="fs" value="guide">Guide
                        <input type="checkbox" name="fs" value="travel">Travel
                        <input type="checkbox" name="fs" value="drama">Drama
                        <input type="checkbox" name="fs" value="others">Others
                    
                     <input type="button" class=ok value="OK" onclick="hide()"></input>
            </div>
                
    </div>
  </div>
    <p style="color:red; font-size:20px; left:350px; position:relative"><?php if(isset($_SESSION["success"])) echo "Successfully Submitted"?></p>
  <script src="intermediateCSS.php">
    
</script>
</body>
<?php session_unset(); ?>
</html>

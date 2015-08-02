<!DOCTYPE html>
<html>
    
<head>
    <link href="intermediateCSS.css" rel="stylesheet" type="text/css">
    <title></title>
</head>

<body>
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
         <form method="post"  id="form1">
            <div class=innerdiv1Inside id="innerleft">
                <h2>Subscription Form</h2>
                <table width="270" height="200" >
                        <tr><td>Name</td><td><input type="text" id="name" name="name">
                        <span id="nameErr"></span></td></tr>
                        <tr><td>Email</td><td><input type="text" id="email"  name="email">
                        <span id="emailErr"></span></td></tr>
                        <tr><td>PhNum</td><td><input type="text" id="phnum"  maxlength="13" name="phnum">
                        <span id="phnumErr"></span></td></tr>
                        <tr><td>Sex</td><td><input type="radio" id="sex" value="female" name="sex">Male<input type="radio" id="sex" value="male" name="sex">Female
                        <span id="sexErr"></span></td></tr>
                        <tr><td>Interest</td>
                        <td><input type="checkbox" name="interest" value="sports" >Sports
                        <input type="checkbox" name="interest" value="movie" >Movie
                        <input type="checkbox" name="interest" value="reading">Reading
                        <span id="interestErr"></span></td></tr>
                </table>
            </div>
            <div class=innerdiv1Inside id="innerright">
                
                <table width="270" height="170" >
                        
                        <tr><td>Country</td><td><select id="country" name="country" onchange="getstate(this)">
                                              <option disabled selected></option>
                                              <option value="india">India</option>
                                              <option value="usa">USA</option>
                                            </select>
                                            <span id="countryErr"></span><span></td></tr>

                        <tr><td>State</td><td><select id="states" name="states" value="" name="states" disabled>
                                             
                                            </select>
                            <span id="stateErr"></span></td></tr>
                        <tr><td>Address</td><td><textarea rows='10' id="address" name="address"></textarea >
                        <span id="addressErr"></span></td></tr>
                </table>
            </div>
            
                <input type="button" class=subscribe onclick="subscribe()" value="SUBSCRIBE">
                <button type="reset" class=reset onclick="getstate('refresh')">RESET</button>
            
        </form>
        </div>
    </div>
    
  </div>
    <p style="color:red; font-size:20px; left:350px; position:relative" id='status'></p>
  <script src="javascript.js">
    
</script>
</body>

</html>

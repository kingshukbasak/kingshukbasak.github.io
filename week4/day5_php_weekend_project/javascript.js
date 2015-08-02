//function for changing the tabs
function change(x) {
    var a = document.getElementById("tab1");
    var b = document.getElementById("tab2");
    if (x == 'tab1') 
    {
        document.getElementById("maindiv1").style.visibility = 'visible';
        document.getElementById("maindiv2").style.visibility = 'hidden';
        a.style.color = '#39F';
        b.style.color = '#878787';
        a.style.backgroundColor = '#E4F0FE';
        b.style.backgroundColor = 'white';
        b.style.borderBottom = '1px solid #39F';
        a.style.borderBottom = '1px solid #E4F0FE ';
    } else 
    {
        document.getElementById("maindiv2").style.visibility = 'visible';
        document.getElementById("maindiv1").style.visibility = 'hidden';
        a.style.backgroundColor = 'white';
        b.style.backgroundColor = '#E4F0FE';
        a.style.color = "#878787";
        b.style.color = "#39F";
        a.style.borderBottom = '1px solid #39F';
        b.style.borderBottom = '1px solid #E4F0FE ';
    }

    
   
}

//function for dynamically creating the states
function getstate(a)
{
   
    var country=a.value,st;
    if(country=="india")
             st=["MadhyaPradesh","Bihar","Odisa","WestBengal","Delhi","Maharastra","Assam","Tripura"];
    else if(country=="usa")
             st=["California","Alabama","Alaska","Colorado","Hawaii","Florida","LosAngelos"];
    var state=document.getElementById("states");
    state.disabled=false;
    state.id="states";
    var len=state.options.length;
    //removing previously populated states
    for(i=0;i<len;i++)
    state.remove(state.options[i]);
    //clicking on the reset button removes the state and does not recreates it.
    if(a=="refresh")
        return;
    //creating the states dynamically
    for(i=0;i<st.length;i++)
    {
        
        var option = document.createElement('option');
        option.value = st[i];
        option.innerHTML=st[i];
        state.add(option);
    }

    

}
//function called when the subscribed button is clicked
function subscribe() 
{
    //getting the value of various input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phnum = document.getElementById("phnum").value;
    var sex = document.getElementsByName("sex");
    var address = document.getElementById("address").value;
    var interest = document.getElementsByName("interest");
    var country = document.getElementById("country");
        country=country.options[country.selectedIndex].value;
    var state = document.getElementById("states");
    if(state.options.length!=0)
         state=state.options[state.selectedIndex].value;
    else state="";
    if(sex[0].checked) 
        sex="male";
    else if(sex[1].checked) 
        sex="femmale"
    else 
        sex="";
    var interests=[];
    for(var i=0;i<3;i++)
        {
            if(interest[i].checked)
                interests[i]=interest[i].value;
            else interests[i]="";
        }
    //Create an XMLHttpRequest object or ActiveXObject depending on the browser
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //Create the function to be executed when the server response is ready
    xmlhttp.onreadystatechange = function() {
    //checking for readyState to b 4(request finished and response is ready) and xmlhttp status to be 200(OK)
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        console.log(xmlhttp.responseText);
            //converting the response string to a JSON object
            var obj = JSON.parse(xmlhttp.responseText);
            //setting the value of the span fields for vaious messages
            for (var i in obj) 
                document.getElementById(i).innerHTML =obj[i];
            if(obj.status=="SUCCESSFULLY SUBMITTED")
            {
                document.getElementById("form1").reset();
                getstate("refresh");
            }
    }
    };
    //creating the parameter string to be sent as POST data
    var params = "name="+name+"&email="+email+"&phnum="+phnum+"&interest1="+interests[0]+"&interest2="+interests[1]+"&interest3="+interests[2]+"&sex="+sex+"&country="+country+"&state="+state+"&address="+address;
   // method used to open the connection mentioning type, the page to which data is to be sent and asynchronously
    xmlhttp.open("POST", "phpvalidate.php", true);
    //encoding the parameter string
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //sending the Post request
    xmlhttp.send(params);
}

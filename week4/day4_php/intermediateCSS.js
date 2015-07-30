

function change(x) {
    var a = document.getElementById("tab1");
    var b = document.getElementById("tab2");
    if (x == 'tab1') {
        document.getElementById("maindiv1").style.visibility = 'visible';
        document.getElementById("maindiv2").style.visibility = 'hidden';
        a.style.color = '#39F';
        b.style.color = '#878787';
        a.style.backgroundColor = '#E4F0FE';
        b.style.backgroundColor = 'white';
        b.style.borderBottom = '1px solid #39F';
        a.style.borderBottom = '1px solid #E4F0FE ';
    } else {
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

function check(input)
{
    var len=input.value.length;
    var x=input.value;
    console.log(len);

    

    if(len==3)
    {
        console.log(x);
        if(x!='+91')
        {
            input.style.borderColor='red';
            alert("Not an Indian Number:Number should start with +91");
            input.value="+";
            input.style.borderColor='#39F';
        }
    }
    if(len==4)
    {
        
        if(x.charAt(3)!=9 && x.charAt(3)!=7 && x.charAt(3)!=8)
            {
                input.style.borderColor='red';
                alert("Not an indian number:Number should start with 9,8 or 7");
                input.value="+";
                input.value="+";
                input.style.borderColor='#39F';
            }
    }



}

function restrict(e)
{
    var x=e.which;

    if (x<48||x>57) return false;
}



function getstate(a)
{
   
   
   var country=a.value,st;
    if(country=="india")
             st=["Madhya Pradesh","Bihar","Odisa","West Bengal","Delhi","Maharastra","Assam","Tripura"];
    else if(country=="usa")
             st=["California","Alabama","Alaska","Colorado","Hawaii","Florida","Los Angelos"];
    var state=document.getElementById("states");
    state.disabled=false;
    state.id="states";
    var len=state.options.length;
    for(i=0;i<len;i++)
    state.remove(state.options[i]);
    if(a=="refresh")
        return;
    for(i=0;i<st.length;i++)
    {
        
        var option = document.createElement('option');
        option.value = st[i];
        option.innerHTML=st[i];
        state.add(option);
    }

    

}

    


function fetch() {
    var sex, interest = "";
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementsByName('sex');
    for (var i = c.length; i--;) {
        if (c[i].checked) {
            sex = c[i].value;
            break;
        }
    }
    var inputElements = document.getElementsByName('interest');
    for ( i= 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            interest = interest + inputElements[i].value + ",";
        }
    }
    var e = document.getElementById('country').value;
    var f = document.getElementById('address').value;
    var object={};
    object.name=a;
    object.email=b;
    object.sex=sex;
    object.interest=interest;
    object.country=e;
    object.address=f;
    
    JSON.stringify(object);

    console.log(object);


    console.log("{");
    console.log('"name":"' + a + '",');
    console.log('"email":"' + b + '",');
    console.log('"sex":"' + sex + '",');
    console.log('"interest":"' + interest + '",');
    console.log('"country":"' + e + '",');
    console.log('"address":"' + f + '"');
    console.log("}");
}

var x;

function selection(cb) {
    if (cb.checked) {
        document.getElementById("model").style.visibility = 'visible';
        x = cb.value;
        document.getElementById(x).style.visibility = 'visible';
    }
    
}

function hide() {
    
    document.getElementById("model").style.visibility = 'hidden';
    document.getElementById(x).style.visibility = 'hidden';
    
}

function subscribe() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
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
    var interests="";
     for(var i=0;i<3;i++)
         if(interest[i].checked)
             interests+=interest[i].value+" ";
     var sexes="";
     if(sex[0].checked) sexes="male";
     else if(sex[1].checked) sexes="femmale"
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            var obj = JSON.parse(xmlhttp.responseText);
            for (var i in obj) 
                document.getElementById(i).innerHTML =obj[i];
            if(obj.status=="SUCCESSFULLY SUBMITTED")
            {
                document.getElementById("form1").reset();
                getstate("refresh");
            }
        }
    };
    var params = "name="+name+"&email="+email+"&phnum="+phnum+"&interest="+interests+"&sex="+sexes+"&country="+country+"&states="+state+"&address="+address;
    xmlhttp.open("POST", "phpvalidate.php", true);
    xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xmlhttp.send(params);
}

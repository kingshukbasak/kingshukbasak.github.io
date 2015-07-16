function change(x) {
    var a = document.getElementById("tab1");
    var b = document.getElementById("tab2");
    if (x == 'tab1') {
        document.getElementById("maindiv1").style.visibility = 'visible';
        document.getElementById("maindiv2").style.visibility = 'hidden';
        a.style.color = '#8197B6';
        b.style.color = 'black';
        a.style.backgroundColor = '#E4F0FE';
        b.style.backgroundColor = 'white';
        b.style.borderBottom = '1px solid #DDE6F7';
        a.style.borderBottom = '1px solid #E4F0FE ';
    } else {
        document.getElementById("maindiv2").style.visibility = 'visible';
        document.getElementById("maindiv1").style.visibility = 'hidden';
        a.style.backgroundColor = 'white';
        b.style.backgroundColor = '#E4F0FE';
        a.style.color = "black";
        b.style.color = "#8197B6";
        a.style.borderBottom = '1px solid #DDE6F7';
        b.style.borderBottom = '1px solid #E4F0FE ';
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
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            interest = interest + inputElements[i].value + " ";
        }
    }
    var e = document.getElementById('country').value;
    var f = document.getElementById('address').value;
    console.log("{");
    console.log('"name":"' + a + '",');
    console.log('"email":"' + b + '",');
    console.log('"sex":"' + sex + '",');
    console.log('"interest":"' + interest + '",');
    console.log('"country":"' + e + '",');
    console.log('"address":"' + f + '"');
    console.log("}");
}

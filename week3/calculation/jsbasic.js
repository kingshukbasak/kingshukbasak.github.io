//it is called on clicking on the add button
function add()
{
	remove("add");
	remove("substract");
	document.getElementById("add").style.visibility="visible";
	document.getElementById("substract").style.visibility="hidden";
	for(var i=0;i<30;i++)	
	createDiv("add",i);
	createNum("add");
	}
//it is called on typing the result	
function check(x)
{	
	var pos=x.id;
	var val=x.value;
	
	
            x.setSelectionRange(0, 0);}
      	
	
	if (x.value==result[pos]) 
		{
		x.style.border='1px solid black';
		x.style.backgroundColor='green';
		
		}
	else if(x.value=="")
	{
		x.style.border='1px solid black';
		x.style.backgroundColor='white'; 
	}
	else 
	{
		console.log(result[pos]);
		x.style.border='1px solid red';	
		x.style.backgroundColor='red';
	}
}
//it is called on clicking the substract button
function substract()
{
	remove("add");
	remove("substract");
	document.getElementById("substract").style.visibility="visible";
	document.getElementById("add").style.visibility="hidden";
	for(var i=0;i<30;i++)
	createDiv("substract",i);
	createNum("substract");
}
//it is called for clearing the previous divs
function remove(x)
{
	myNode=document.getElementById(x);
	while (myNode.firstChild) 
    myNode.removeChild(myNode.firstChild);

	
}
var result={};
//it is used for inintiatizing the result,num1 ans num2 array and setting the value of the number in the browser
function createNum(x) 
{	var num1={};
	var num2={};
	
	
	var divnum1=document.getElementsByClassName("num1");
	var divnum2=document.getElementsByClassName("num2");
	var divresult=document.getElementsByClassName("result");
	for(var i=0;i<30;i++)
	{	
	
		num1[i]=Math.floor(Math.random()*100);
		num2[i]=Math.floor(Math.random()*100);
		divnum1[i].value=num1[i];
		if(x=="add")
		{
		divnum2[i].value="+"+num2[i];
		result[i]=num1[i]+num2[i];
		
		}
		else if(x=="substract")
		{
		divnum2[i].value="-"+num2[i];
		result[i]=num1[i]-num2[i];
		
		}		
		
		
		
		
	}
	
}

//it is used for creating the divs dynamically
function createDiv(x,i) 
{	
	var maindiv=document.getElementById(x);
	var innerDiv = document.createElement('div');
	innerDiv.className = 'divs';
	innerDiv.id='divs';
	maindiv.appendChild(innerDiv);
	
	var input = document.createElement('input');
   input.type = "text";
   input.name = "num1";
   input.className="num1"
   input.disabled='true';
   
   innerDiv.appendChild(input);
   
   var input = document.createElement('input');
   input.type = "text";
   input.name = "num2";
   input.className="num2";
   input.disabled='true';
   
   innerDiv.appendChild(input);
   
   var input = document.createElement('input');
   input.type = "text";
   input.name = "result";
   input.className="result";
   input.id=i;
   input.setAttribute('onkeyup','check(this)');
   
   innerDiv.appendChild(input);
	

	
}

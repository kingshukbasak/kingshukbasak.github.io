var img;
var button;
function showbutton(x,y)
{
	if (typeof y!= 'undefined')img=y;
x.style.visibility='visible';
img.style.border="3px solid";
img.style.borderColor="rgb(94,181,139)";
img.style.padding="0px";
    
}

function hidebutton(x)
{
button=x;
x.style.visibility='hidden';
img.style.border="";
img.style.borderColor="";
img.style.padding="3px";
}

function enlarge() 
{
	document.getElementById("cover").style.visibility='visible';
	document.getElementById("bigimg").src=img.src;
	var image=document.getElementById("bigimg");	
	hidebutton(button);
}
function hideimg()
{
	document.getElementById("cover").style.visibility='hidden';
	count=0;
}

function stopevent(x)
{
	 x.stopPropagation();
}
var count=0;
var i=0;
var arr=["work1.jpg","work2.jpg","work3.jpg","work4.jpg","work5.jpg","work6.jpg"];


function nextimg(x) 
{
	var imgmatch=img.src; 
	if(count==0)
	{
		count=1;
	i=0;
	for( i in arr)
		if(imgmatch.search(arr[i])!=-1)
			break;
	 }
	 
	document.getElementById("bigimg").src=arr[++i%6];
	x.stopPropagation();
	
}

function previousimg(x) 
{
	var imgmatch=img.src; 
	
	if(count==0)
	{
		count=1;
	i=0;
	for( i in arr)
		if(imgmatch.search(arr[i])!=-1)
			break;
	 }
	 if(i==0) i=6;
	document.getElementById("bigimg").src=arr[--i%6];
	x.stopPropagation();
	
}
function validate(x)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
	if(x.value.match(mailformat))
	x.style.borderColor="rgb(171,171,171)";
	else if (x.value=="")
	 x.style.borderColor="rgb(171,171,171)";
	else 
	x.style.borderColor="red";
	
}
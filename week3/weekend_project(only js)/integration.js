(function main() 
{
	var mainBody=document.getElementsByTagName("body")[0];
	mainBody.id="body";
	createElements({element:"div",parentelement:"body",className:"maindiv",id:"maindiv"});
	createElements({element:"div",parentelement:"maindiv",id:"labeldiv"});
	createElements({element:"div",parentelement:"maindiv",id:"radiodiv",
	style:{position: "absolute",top: "38px"}});
	createElements({element:"label",parentelement:"labeldiv",number:2,className:"label",innerHTML:["Basic Calculator","Date Calculator","Mortgage Calculator"],id:"label",style:{"marginRight":"10px"}});
	createElements({element:"input",parentelement:"radiodiv",number:2,className:"radio",type:"radio",name:"select",id:["basic","datecal","mortgage"],checked:["checked",null,null],style:{"marginRight":"20px","marginLeft":"50px"}});
	
	createElements({element:"div",parentelement:"maindiv",id:"basicdiv",className:"basicdiv",
	style:{"visibility":"visible"}});
	createElements({element:"div",parentelement:"maindiv",id:"datediv",className:"datediv",
	style:{"visibility":"hidden","top":"61px","position":"relative"}});
	createElements({element:"div",parentelement:"maindiv",id:"mortgagediv",className:"mortgagediv",
	style:{"visibility":"hidden"}});
	
	createElements({element:"div",parentelement:"basicdiv",id:"wrapper",className:"wrapper",
	style:{"top":"83px","left":"302px","position": "absolute","width": "296px", "border": "5px solid blue",  "padding": "20px 15px 20px 20px",  "backgroundColor": "azure"}});
	createElements({element:"div",parentelement:"wrapper",id:"divscreen"});
	createElements({element:"input",parentelement:"divscreen",id:"screen",type:"text",className:"screen",
	style:{"width":"278px","height":"26px",	"border":"1px solid black","textAlign":"right"}});
	createElements({element:"input",parentelement:"wrapper",number:23,type:"button",id:["1","2","3","+","ce","m+","4","5","6","-","mc","m-","7","8","9","*","mr","can","0",".","/","%","MOD","="],value:["1","2","3","+","CE","M+","4","5","6","-","MC","M-","7","8","9","*","MR","CAN","0",".","/","%","MOD","="],className:"buttons",
	style:{"float":"left","width":"43px",	"margin":"5px 5px 5px 0px"}});
	
	createElements({element:"div",parentelement:"mortgagediv",id:"wrapper1",className:"wrapper1",
	style:{"width": "359px", "height": "70px", "top": "141px",  "left": "222px", "position": "absolute",  "border": "2px solid aqua"  ,"padding": "10px 0px 0px 10px"}});
	createElements({element:"p",parentelement:"wrapper1",number:3,className:"labelmortgage",innerHTML:["LOAN","EMI","RATES","MONTHS"],
	style:{"float": "left","margin":"0px 0px 0px 10px",	"width": "74px"}});
	createElements({element:"input",parentelement:"wrapper1",number:3,className:"inputinfo",id:["loan","emi","rate","months"],placeholder:["LOAN","EMI","RATES","MONTHS"],
	style:{width:"80px"}});
	createElements({element:"input",parentelement:"wrapper1",id:"calmortgage",className:"calmortgage",type:"button",value:"CALCULATE",
	style:{"marginLeft": "110px","marginTop": "10px"}});
	
		
	createElements({element:"div",parentelement:"datediv",id:"wrapper2",className:"wrapper2",
	style:{	"width":"100%" ,	"clear": "left",	"height": "153px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Enter two dates to get the difference:"});
	createElements({element:"div",parentelement:"wrapper2",id:"innerDiv1",className:"innerDiv1",
	style:{	  "width": "100%" , "marginLeft": "61px", "height": "43px"}	});
	createElements({element:"input",parentelement:"innerDiv1",number:1,id:["date1","date2"],className:"calender",type:"date",
	style:{ "marginLeft": "17px","marginRight": "75px"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Date 1",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["dd1","mm1"],className:"dates",type:"text",placeholder:["DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"yyyy1",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Date 2",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["dd2","mm2"],className:"dates",type:"text",placeholder:["DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"yyyy2",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Diff",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["rdd","rmm"],className:"dates",type:"text",placeholder:["DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"ryyyy",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Days",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",id:"days",className:"dates",type:"text",placeholder:"Days",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"cal1",className:"cal",type:"button",value:"Calculate",
	style:{width: "77px",  float: "left",  padding: "10px",  marginLeft: "48px"}	});
	
	
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Enter two time to get the difference:",
	style:{clear:"left"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Time 1",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["hh1","min1"],className:"dates",type:"text",placeholder:["HH","MIN"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"am1",name:"time1",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"AM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"pm1",name:"time1",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"PM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Time 2",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["hh2","min2"],className:"dates",type:"text",placeholder:["HH","MIN"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"am2",name:"time2",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"AM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"pm2",name:"time2",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"PM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Diff",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["hours","minutes"],className:"dates",type:"text",placeholder:["HH","MIN"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"cal2",className:"cal",type:"button",value:"Calculate",
	style:{width: "77px",  float: "left",  padding: "10px",  marginLeft: "48px"}	});
	
	
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Enter a time/date and an interval :",
	style:{clear:"left"}});
	createElements({element:"div",parentelement:"wrapper2",id:"innerDiv2",className:"innerDiv1",
	style:{	  "width": "100%" , "marginLeft": "61px", "height": "43px"}	});
	createElements({element:"input",parentelement:"innerDiv2",id:"intervaldate",className:"calender",type:"date",
	style:{ "marginLeft": "335px","marginRight": "75px"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Time",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["hh","min"],className:"dates",type:"text",placeholder:["HH","MIN"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"am",name:"time3",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"AM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"input",parentelement:"wrapper2",className:"radio",type:"radio",id:"pm",name:"time3",
	style:{float: "left",	margin: "14px 1px 14px 10px"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"PM",
	style:{padding:"10px",width:"24px",margin: "1px",float: "left"}});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Date",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:1,id:["dd","mm"],className:"dates",type:"text",placeholder:["DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"yyyy",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Interval",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:3,id:["intervalmin","intervalhh","intervaldd","intervalmm"],className:"dates",type:"text",placeholder:["MIN","HH","DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"intervalyyyy",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"p",parentelement:"wrapper2",innerHTML:"Output",
	style:{width:"52px",float: "left",	marginLeft: "25px"}});
	createElements({element:"input",parentelement:"wrapper2",number:3,id:["rintervalmin","rintervalhh","rintervaldd","rintervalmm"],className:"dates",type:"text",placeholder:["MIN","HH","DD","MM"],
	style:{ padding:"10px",width:"24px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"rintervalyyyy",className:"dates",type:"text",placeholder:"YYYY",
	style:{ padding:"10px",width:"37px",margin: "1px",float: "left"}	});
	createElements({element:"input",parentelement:"wrapper2",id:"cal3",className:"cal",type:"button",value:"Calculate",
	style:{width: "77px",  float: "left",  padding: "10px",  marginLeft: "48px"}	});
	
	
	addEventListeners(["basic","datecal","mortgage"],"click",changeDiv);
	addEventListeners(["1","2","3","4","5","6","7","8","9","0","."],"click",disp);
	addEventListeners(["+","-","/","*","%","MOD"],"click",cal);
	addEventListeners(["m+","m-","mc","ce"],"memory",memory);
	addEventListeners(["="],"click",result);
	addEventListeners(["can"],"click",cancel);
	addEventListeners(["ce"],"click",clr);
	addEventListeners(["calmortgage"],"click",cal1);
	addEventListeners(["cal1"],"click",datediff);
	addEventListeners(["cal2"],"click",timediff);
	addEventListeners(["cal3"],"click",interval);
	
	
	
	
	
	//addStyle("basicdiv",{"visibility":"visible"});
	//addStyle("mortgagediv",{"visibility":"hidden"});
	//addStyle("label",{"marginRight":"10px"});
	//addStyle("radio",{"marginRight":"50px","marginLeft":"59px"});
	//addStyle("wrapper",{"top":"83px","left":"302px","position": "absolute","width": "296px", "border": "5px solid blue",  "padding": "20px 15px 20px 20px",  "backgroundColor": "azure"});
	//addStyle("buttons",{"float":"left","width":"43px",	"margin":"5px 5px 5px 0px"});
	//addStyle("screen",{"width":"278px","height":"26px",	"border":"1px solid black","textAlign":"right"});
	//addStyle("wrapper1",{"width": "359px", "height": "70px", "top": "141px",  "left": "222px", "position": "absolute",  "border": "2px solid aqua"  ,"padding": "10px 0px 0px 10px"})
	//addStyle("inputinfo",{"float": "left","width": "77px",	"text-align": "right",	"marginLeft": "3px"});
	//addStyle("labelmortgage",{"float": "left","margin":"0px 0px 0px 10px",	"width": "74px"});
	//addStyle("calmortgage",{"marginLeft": "110px","marginTop": "10px"});
	//RANOJIT'S IDEA createElements({element:"style",parentelement:"body",id:"style",type:"text/css",innerHTML:".wrapper{top: 83px;  left: 302px;  position: absolute;  width: 296px;  border: 5px solid blue;  padding: 20px 15px 20px 20px;  background-color: azure;}#screen{	width: 278px;	height: 26px;	border:1px solid black;	text-align: right;}.buttons{	float: left;	width: 43px;	margin:5px 5px 5px 0px;}.label{ margin-right: 10px; }.radio{  margin-right: 50px; margin-left: 59px;}"});
	
	
	
	function createElements(object)
	 {
	 	var i=0,element,number,j,k;
	 	number=object.number;
	 	if(isNaN(number))
	 		number=0;
	 	for(j=0;j<=number;j++)
	 	{
	 	element=document.createElement(object.element);
	 	for (i=2;i<Object.keys(object).length;i++)
	 	 {
	 	 	var temp=Object.keys(object)[i];
	 	 	
	 	 	var typeproperty=typeof(object[temp]);
	 	 	if (typeproperty=="object" && temp!='style')
	 	 		element[temp]=object[temp][j];
	 	 	else if(temp=='style')
	 	 	{
	 	 		for(k in object[temp])
	 	 			element[temp][k]=object[temp][k]	;
	 	 			
	 	 	}
	 	 	
	 	 	else
	 	 	element[temp]=object[temp];
	 	 	
	 	 }
	 	
	 	 var parentelement=document.getElementById(object.parentelement);
	 	 parentelement.appendChild(element);
	 	 
	 	 }
	 }
	 
	 function addEventListeners(param1,events,func)
	 {
	 	
	 	var element,i=0;
	 	
	 	for (i=0;i<param1.length;i++) 
	 	{
	 		element=document.getElementById(param1[i]);
	 		element.addEventListener(events,func);
	 	}
	 }
	 
	
	 
	 /*function addStyle(classname,attributes)
	 {
	 	var element=document.getElementsByClassName(classname);
	 	var i=0,j=0;
	 	for(j=0;j<element.length;j++)
	 	for (i in attributes) 
	 	{
	 		element[j].style[i]=attributes[i];
	 		
	 	}
	 }*/
	 
	 function addStyle(id,attributes)
	 {
	 	var element=document.getElementById(id);
	 	var i=0;
	 	
	 	for (i in attributes) 
	 	{
	 		element.style[i]=attributes[i];
	 		
	 	}
	 }
	 
	 
	 
	 function changeDiv(x)
	 {
	 	console.log("clicked");
	 	x=x.currentTarget;
	 	if(x.id=="basic")
	 	{
	 		addStyle("basicdiv",{"visibility":"visible"});
			addStyle("mortgagediv",{"visibility":"hidden"});
			addStyle("datediv",{"visibility":"hidden"})
	 	}
	 	
	 	else if(x.id=="datecal")
	 	{
	 		addStyle("basicdiv",{"visibility":"hidden"});
			addStyle("mortgagediv",{"visibility":"hidden"});
			addStyle("datediv",{"visibility":"visible"});
	 	}
	 	else if(x.id=="mortgage")
	 	{
	 		
	 		addStyle("basicdiv",{"visibility":"hidden"});
			addStyle("mortgagediv",{"visibility":"visible"});
			addStyle("datediv",{"visibility":"hidden"});
	 	}
	 }
	
	
	 var num1 = NaN;
var mem = 0;
var count = 0;
var dot = 0;
var clear = 0;
//function used for displaying the keys pressed on the screen
function disp(x)
{
	x=x.currentTarget;
    if (clear == 1)//clear is set to 1 means last function executed was result(), so the screen has to be cleared.
        clr();
    
	var view=document.getElementById("screen");
	var val = view.value;
	if (x.value != '.' || ((x.value == '.') && dot == 0))// if dot counter is set then decimal has already been used,so it cant be used again.
     {
         if (x.value == '.') dot = 1;
	    val = val + x.value;
	    view.value = val;
	 }
}

//used for clearing the screen,all the counters are cleared.
function clr()
{
	
	document.getElementById("screen").value="";
	count = 0;
	dot = 0;
	clear = 0;
}


//used for deciding the operations to execute when an operator is pressed
function cal(x)
 {
 	x=x.currentTarget;
     if (clear == 1)
         clr();
	var val=x.id;
	var view = document.getElementById("screen");

    var a=!(isNaN(view.value.charAt(view.value.length - 1))); //used to ensure only Numbers are preceeded by operators
    var b = view.value.charAt(view.value.length - 1) == '.';    //used for allowing the input format "4.+2" or 6./9  
    var c=!(isNaN(view.value.charAt(view.value.length - 2)));//used for allowing the input format "4.+2" or 6./9
    var e=view.value.charAt(view.value.length - 2)!="";//used for not allowing input as '.-1' in the begining as isNaN("")=true
    var d=view.value.length!=0;                              //checking if it is not the 1st character to the input
	 var f = view.value.charAt(view.value.length - 1) == 'D'; 
	 var g = view.value.charAt(view.value.length - 2) == '.';
     if((a||(b&&c&&e))&&d)
     {
         
         if (count == 1 && x.id == '%' && !(isNaN(view.value.charAt(view.value.length - 1))))
          view.value = view.value + x.id;

      
      

          if (count == 0 && x.id != '%' ) 
          {
              num1 = view.value;
              view.value = view.value + x.id;
              count = 1;
              dot = 0;

           }

      }
    else if(view.value.length==0 && val=='-') // used to input a negative parseFloat in the begining
    {
        view.value='-';
    }
    else if (val == '-' && ((!a && (c||g))||f) && view.value.length!=1) // used to input a negative 2nd parseFloat.
    {
        view.value = view.value + x.id;   
    }
 }
 
 //used to do memory functions
 function memory(x)
 {
 	x=x.currentTarget;
 	var val=x.id;
 	
    var screen=document.getElementById("screen").value
    var num;
    if (isNaN(screen)) //if the value to be stored is not a parseFloat
    {
        num = result();
         if (isNaN(num)) // if the value to be stored is not a mathematical expression
            {
                document.getElementById("screen").value = NaN;
               
                return;
               
             
            }
        }

    else 
    {
        num = parseFloat(screen);
        clear = 1;
    }
    
    if (val == 'm+')
 	mem=parseFloat(mem)+num;
 	else if(val=='m-')
 	mem=parseFloat(mem)-num;
 	else if (val == 'mc')
    {
        mem = 0;
        document.getElementById("screen").value = "";
    }
 	else 
 	    
 		document.getElementById("screen").value=mem;	
 	
 }

 //function used to calculate the result clicking the = button
function result()
{
	var num1len=num1.length;
	var view=document.getElementById("screen");
	var sign = view.value.charAt(num1len);
	var modulusCheck = view.value.charAt(view.value.length - 1);
	var result ="";
	var num2 = NaN;
	if (modulusCheck == '%' && sign != 'M') //steps to evaluate percentage
    {
	     num2 = view.value.substring(num1.length + 1, view.value.length - 1);
	    num2 = parseFloat(num1) * parseFloat(num2) / 100;
	}
	else if (modulusCheck == '%' && sign == 'M') //steps to evaluate modulus with percentage
    {
         num2 = view.value.substring(num1.length + 3, view.value.length - 1);
        num2 = parseFloat(num1) * parseFloat(num2) / 100;
        result = (parseFloat(num1) % parseFloat(num2));
        clear = 1;
        view.value = result;
        return result;
	}
	else
	    num2 = view.value.substring(num1.length + 1);
	
	 if (num2 == "")
	     num2 = NaN;
         //general + = * / and modulus functions.
	if(sign=='+')
	result=(parseFloat(num1)+parseFloat(num2));
	else if(sign=='-')
	result=(parseFloat(num1)-parseFloat(num2));
	else if(sign=='/')
	result=(parseFloat(num1)/parseFloat(num2));
	else if(sign=='*')
	result=(parseFloat(num1)*parseFloat(num2));
	else if(sign=='M' && modulusCheck!='%')
	{
		var num2=view.value.substring( num1.length+3);
		result=(parseFloat(num1)%parseFloat(num2));
	}
clear = 1;

view.value = result;
return result;

}

//function used for clearing each input
function cancel() 
{

    var view = document.getElementById("screen");
    var len = view.value.length;
    var char = view.value.charAt(len - 1);
    if (isNaN(char) && char!='%')
        count = 0;
    if (char == 'D')
        len -= 2;
    else if (char == '.')
        dot = 0;
	view.value = view.value.substring(0, len-1);
	
}

//restricting entry of only digits

function restrict(e)
{
    var x=e.which;

    if (x<48||x>57) return false;
}

function cal1() 
{
	var loan,months,rate,emi;
	loan=document.getElementById("loan").value;
	months=document.getElementById("months").value;
	rate=document.getElementById("rate").value;
	emi=document.getElementById("emi").value;
	var r=Math.pow((1+rate/1200),months);
	if(loan=="")
	{
		
		loan= Math.round((emi*r-emi)/(r*rate/1200));
		document.getElementById("loan").value=loan;
	}
	else if(emi=="")
	{
		
		emi=Math.round((loan*r*rate/1200)/(r-1));
		document.getElementById("emi").value=emi;
	}
	else if(months=="")
	{
		var c=emi-loan*rate/1200;
		var a=Math.log(emi/c);
		var b=Math.log(1+rate/1200);
		months=Math.round( a/b);
		if(c<0)
		document.getElementById("months").value="EMI too less";
		else
		document.getElementById("months").value=months;
	}
}

function datediff() 
{
	var date1,date2,diff,yyyy=0,dd=0,mm=0;
	date1=new Date(document.getElementById("date1").value);
	date2=new Date(document.getElementById("date2").value);
	
	document.getElementById("dd1").value=date1.getDate();
	document.getElementById("mm1").value=date1.getMonth()+1;
	document.getElementById("yyyy1").value=date1.getFullYear();
		
	
	document.getElementById("dd2").value=date2.getDate();
	document.getElementById("mm2").value=date2.getMonth()+1;
	document.getElementById("yyyy2").value=date2.getFullYear();
	
	
	diff=date2-date1;
	diff=diff/(3600000*24);
	document.getElementById("days").value=diff;
	
	yyyy=Math.floor(diff/365);
	diff=diff-yyyy*365;
	
	mm=Math.floor(diff/30);
	diff=diff-mm*30;
	
	dd=diff;
	
	document.getElementById("rdd").value=dd;
	document.getElementById("rmm").value=mm;
	document.getElementById("ryyyy").value=yyyy;
}


function timediff() 
{
	var hh1,hh2,min1,min2,dif,hour,minute;
	hh1=document.getElementById("hh1").value;
	min1=document.getElementById("min1").value;
	hh2=document.getElementById("hh2").value;
	min2=document.getElementById("min2").value;
	
	
	
	   if(document.getElementById("pm1").checked && Number(hh1) != 12) 
		hh1=Number(hh1)+12;
		else if (document.getElementById("am1").checked && Number(hh1) == 12)
 	    hh1 = 0;
		
	
	
	 if(document.getElementById("pm2").checked && Number(hh2) != 12) 
		hh2=Number(hh2)+12;
		else if (document.getElementById("am2").checked && Number(hh2) == 12)
 	    hh2s = 0;	
		
		
		min1=Number(min1)+Number(hh1)*60;
		min2=Number(min2)+Number(hh2)*60;
		
		
			dif=min2-min1;
			
			hour=Math.floor(dif/60);
			minute=dif%60;
			if(hour<0) hour+=24;
			if(minute<0) minute+=60;
			
		document.getElementById("hours").value=hour;
		document.getElementById("minutes").value=minute;
	
		
	
}

function interval()
 {
 	var inithour=Number(document.getElementById("hh").value);
 	var initmin = Number(document.getElementById("min").value);

 	if (document.getElementById("pm").checked)
 	    inithour = inithour + 12;
 	else if (document.getElementById("am").checked && inithour == 12)
 	    inithour = 0;

 	

 	var date=new Date(document.getElementById("intervaldate").value);

 	

 	document.getElementById("dd").value=date.getDate();
	document.getElementById("mm").value=date.getMonth()+1;
	document.getElementById("yyyy").value=date.getFullYear();


	date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), inithour, initmin);

	var hh=0,minutes=0,day=0,month=0,year=0;
	
	hh=document.getElementById("intervalhh").value;
	minutes=document.getElementById("intervalmin").value;
	day=document.getElementById("intervaldd").value;
	month=document.getElementById("intervalmm").value;
	year=document.getElementById("intervalyyyy").value;
	
   
			
    var milisecond=date.getTime();
    milisecond=milisecond+(Number(hh)*3600+Number(minutes)*60+Number(day)*24*3600+Number(month)*30*24*3600+Number(year)*365*24*3600)*1000;
    var newdate = new Date(milisecond);

   
    document.getElementById("rintervalhh").value = newdate.getHours();
    document.getElementById("rintervalmin").value = newdate.getMinutes();
    document.getElementById("rintervaldd").value = newdate.getDate();
    document.getElementById("rintervalmm").value = newdate.getMonth()+1;
    document.getElementById("rintervalyyyy").value = newdate.getFullYear();


 }







	 
	 
})();
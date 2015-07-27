var num1 = NaN;
var mem = 0;
var count = 0;
var dot = 0;
var clear = 0;
//function used for displaying the keys pressed on the screen
function disp(x)
{
    if (clear == 1)//clear is set to 1 means last function executed was result(), so the screen has to be cleared.
        clr();
    
	var view=document.getElementById("screen");
	var val = view.value;
	if (x.value != '.' || ((x.value === '.') && dot === 0))// if dot counter is set then decimal has already been used,so it cant be used again.
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
     if (clear == 1)
         clr();
	var val=x.id;
	var view = document.getElementById("screen");

    var a=!(isNaN(view.value.charAt(view.value.length - 1))); //used to ensure only Numbers are preceeded by operators
    var b = view.value.charAt(view.value.length - 1) == '.';    //used for allowing the input format "4.+2" or 6./9  
    var c=!(isNaN(view.value.charAt(view.value.length - 2)));//used for allowing the input format "4.+2" or 6./9
    var e=view.value.charAt(view.value.length - 2) !=="";//used for not allowing input as '.-1' in the begining as isNaN("")=true
    var d=view.value.length!==0;                              //checking if it is not the 1st character to the input
	 var f = view.value.charAt(view.value.length - 1) == 'D'; 
	 var g = view.value.charAt(view.value.length - 2) == '.';
     if((a||(b&&c&&e))&&d)
     {
         
         if (count == 1 && x.id == '%' && !(isNaN(view.value.charAt(view.value.length - 1))))
          view.value = view.value + x.id;

      
      

          if (count ===  0 && x.id != '%' ) 
          {
              num1 = view.value;
              view.value = view.value + x.id;
              count = 1;
              dot = 0;

           }

      }
    else if(view.value.length===0 && val=='-') // used to input a negative parseFloat in the begining
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
 	var val=x.id;
 	
    var screen=document.getElementById("screen").value;
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
	var result1 ="";
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
        result1 = (parseFloat(num1) % parseFloat(num2));
        clear = 1;
        view.value = result;
        return result;
	}
	else
	    num2 = view.value.substring(num1.length + 1);
	
	 if (num2 === "")
	     num2 = NaN;
         //general + = * / and modulus functions.
	if(sign=='+')
	result1=(parseFloat(num1)+parseFloat(num2));
	else if(sign=='-')
	result1=(parseFloat(num1)-parseFloat(num2));
	else if(sign=='/')
	result1=(parseFloat(num1)/parseFloat(num2));
	else if(sign=='*')
	result1=(parseFloat(num1)*parseFloat(num2));
	else if(sign=='M' && modulusCheck!='%')
	{
		 num2=view.value.substring( num1.length+3);
		result1=(parseFloat(num1)%parseFloat(num2));
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

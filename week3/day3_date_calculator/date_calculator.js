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








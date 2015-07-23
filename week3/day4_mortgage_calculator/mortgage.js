function cal() 
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
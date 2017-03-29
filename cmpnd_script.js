var objDOM,objwrds;
var sltwrd="";
var wrds = Array(25);
var slctwrds = Array(25);
var strtflag="0";
var crct = 0;


objDOM = new ActiveXObject("MSXML.DOMDocument");
objDOM.load("words.xml");

objwrds = objDOM.getElementsByTagName("w");

function ar()
{
	var i=0;
	
	for(i=0;i<(objwrds.length);i++)
		wrds[i]=objwrds.item(i).firstChild.nodeValue;
		
}

function slct(wrd,tbl,tbl1)
{
	compound.rslt.src="";
	if(tbl == 1)
		document.compound.bx1.value = wrd;
	else if(tbl == 2)
		document.compound.bx2.value = wrd;	
	
}

function chck()
{
	var i=0,crctflag=0,alrflag=0;
	
	if(strtflag == 0)
		ar();
	
	if((document.compound.bx1.value == "")||(document.compound.bx2.value == ""))
	{
		if((document.compound.bx1.value == "")&&(document.compound.bx2.value == ""))
			alert("Please Select Word From Both Table");
		else if(document.compound.bx2.value == "")
			alert("Please Select Word From Right Side Table");
		else
			alert("Please Select Word From Left Side Table");
		alrflag=1;
	}
	
	sltwrd = document.compound.bx1.value + document.compound.bx2.value;
	
	for(i=0;i<crct;i++)
		if(slctwrds[i] == sltwrd)
		{
		document.compound.bx1.value = "";
		document.compound.bx2.value = "";
		alert("Sorry This Word Is You Already Selected... So Please Select Another Word ");
		alrflag=1;
		break;
		}
		
	if(alrflag == 0)
	{
		for(i=0;i<(objwrds.length);i++)
		{
			if(wrds[i] == sltwrd)
			{
				compound.rslt.src="crct.gif";
				crctflag = 1;
				slctwrds[crct] = sltwrd;
				crct++;						
				
				document.compound.urcwrds.value += crct+". "+ sltwrd+' ';
				document.compound.scrbrd.value = crct * 5;
				
							if((crct%9) == 0)
										document.compound.urcwrds.value += '\n\n'	;
				break;
			}
			
		}
		  if(crctflag == 0)
			  compound.rslt.src="wrng.gif";
		  
		document.compound.bx1.value = "";
		document.compound.bx2.value = "";
	}		  

	if(crct == 25)
	alert('Game Over');
}


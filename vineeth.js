function startfun()
	{
		$("#quizdiv").css('visibility', 'hidden');	
	}

function startquiz()
	{
		$("#ndiv").css('visibility', 'visible')
	}
function showQuestions()
	{	
		var alphaExp = /[a-zA-Z]/;
		var nameCheck = $("#uid").val();
		if(nameCheck=="")
		{
			window.alert("Please Enter your name");
			uid.focus();
		}
	else if(uid.value.match(alphaExp))
		{	
 			document.getElementById('but1').style.visibility='hidden';
			var div2 = document.getElementById('quest');
  			div2.style.visibility = 'visible';
			var div2 = document.getElementById('ndiv');
		div2.style.visibility = 'hidden';
		}
	else
		{
			window.alert("Please Enter only String.Thank you!");
			uid.focus();
		}
	}

function firstf1()
	{
    	var c=0;	
 		if(document.getElementById('r2').checked) 
 			{
  				c++; 
			}
		else if(document.getElementById('r1').checked)
			{
				//
			}
		else
			{
				window.alert("Please select option for question 1");
			}	
		if (document.getElementById('r3').checked) 
 			{
  				c++;
			}	
		else if(document.getElementById('r4').checked)
			{
				//
			}
		else
			{
				window.alert("Please select option for question 2");
			}
		if (document.getElementById('r6').checked) 
 			{
  				c++;
			}	
		else if(document.getElementById('r5').checked)
			{
				//
			}
		else
			{
				window.alert("Please select option for question 3");
			}
		if(document.getElementById('r7').checked) 
 			{
  				c++;	 
			}
		else if(document.getElementById('r8').checked)
			{
				//
			}
		else
			{
				window.alert("Please select option for question 4");
			}
		if((document.getElementById('r1').checked || document.getElementById('r2').checked) && (document.getElementById('r3').checked || document.getElementById('r4').checked) && (document.getElementById('r5').checked || document.getElementById('r6').checked) && (document.getElementById('r7').checked ||  document.getElementById('r8').checked) )
			{
				$("#submit1").css('visibility', 'visible')	
				$("#quest").css('visibility', 'hidden')
				$("#ndiv").css('visibility', 'hidden')
				var name = document.getElementById("uid").value;
				document.getElementById("results").innerHTML = "Hey, " + name +" you  Scored: "+ c +" , Wanna Retake?";	
			}	
	}

function reload()
	{
		location.reload();
	}

function submitfun()
	{
		var alphaExp = /[a-zA-Z]/;
		var num= /[0-9]/;
		var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		var n = document.getElementById('n1').value;
		if(n1.value.match(num))
			{
				window.alert("Please Enter name correctly(Characters only). Thank you.");
				n1.focus();
			}
			else if((e1.value.match(num)))
			{
				window.alert("Please Enter Email ID correctly(Eg: vineeth@gmail.com). Thank you.");
				e1.focus();
			}
		if((n1.value.match(alphaExp)) && (e1.value.match(email)))
			{
				
				window.alert("Thank you: " +n+ "! I'll get back to u soon.");
				document.getElementById("Cform").reset();
				}
			else{
				window.alert("Please Enter Email ID correctly(Eg: vineeth@gmail.com). Thank you.");
				e1.focus();
			}
			
			
}
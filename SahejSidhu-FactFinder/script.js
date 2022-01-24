var a = "Giant Pandas eat approximately 28 pounds of bamboo a day – that’s over 5 tons per year!";
var b = "Cats are not able to taste anything that is sweet.";
var c = "You fart on average 14 times a day, and each fart travels from your body at 7 mph.";
var d = "One of the ingredients needed to make dynamite is peanuts.";
var e = "Kangaroos can not walk backwards.";

document.querySelector('#ff1').addEventListener("click",showff1);
function showff1(){
	document.getElementById('factbox').innerHTML = "<h3>" + a + "<h3>" + "<img src='images/panda.png' alt='panda'>";
}

document.querySelector('#ff2').addEventListener("click",showff2);
function showff2(){
	document.getElementById('factbox').innerHTML = "<h3>" + b + "<h3>"  + "<img src='images/cat.png' alt='cat'>";
}

document.querySelector('#ff3').addEventListener("click",showff3);
function showff3(){
	document.getElementById('factbox').innerHTML = "<h3>" + c + "<h3>"  + "<img src='images/farting.png' alt='farting'>";
}

document.querySelector('#ff4').addEventListener("click",showff4);
function showff4(){
	document.getElementById('factbox').innerHTML = "<h3>" + d + "<h3>"  + "<img src='images/dynamite.png' alt='explosion'>";
}

document.querySelector('#ff5').addEventListener("click",showff5);
function showff5(){
	document.getElementById('factbox').innerHTML = "<h3>" + e + "<h3>"   + "<img src='images/kangaroo.png' alt='kangaroo'>";
}

document.querySelector('#t1').addEventListener("click",showt1);
function showt1(){
	document.body.style.backgroundColor = "#FFFFFF";
	document.getElementById('factbox').style.backgroundColor = "#EFF9F0";
	document.getElementById('factbox').style.color = "#DDC8C4";
	document.getElementById('factbox').style.borderColor = "#DDC8C4";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "#4E8098";
		buttons[i].style.backgroundColor = "#96B6C5";
	}
}

document.querySelector('#t2').addEventListener("click",showt2);
function showt2(){
	document.body.style.backgroundColor = "#000000";
	document.getElementById('factbox').style.backgroundColor = "#323031";
	document.getElementById('factbox').style.color = "#7F7979";
	document.getElementById('factbox').style.borderColor = "#7F7979";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "#1D342B";
		buttons[i].style.backgroundColor = "#335C35";
	}
}

document.querySelector('#t3').addEventListener("click",showt3);
function showt3(){
	document.body.style.backgroundColor = "#9F86C0";
	document.getElementById('factbox').style.backgroundColor = "#BE95C4";
	document.getElementById('factbox').style.color = "#5E548E";
	document.getElementById('factbox').style.borderColor = "#5E548E";
	
	var buttons = document.getElementsByTagName('input');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.color = "#5E548E";
		buttons[i].style.backgroundColor = "#E0B1CB";
	}
}
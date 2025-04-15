//SURVEY LINK ALERT
alert("WAIT! Are you from my Web Systems course? Do you want to help me improve my site? Please visit my survey here at this link: https://forms.gle/aQKrVkBbaFWkF6uG7")

//quickly change the source of an element
//x = id string; y = new src
function changeSRC(x, y)
{
	document.getElementById(x).src = y;
}

//quickly change the alt text of an element
//x = id string; y = new alt
function changeALT(x, y)
{
	document.getElementById(x).alt = y;
}

//move all images left
//x = left image; y = middle image; z = right image;
function slideshowL(x, y, z)
{	
	//x is id
	//get src for x
	var srcX = document.getElementById(x).src;
	//get alt for x
	var altX = document.getElementById(x).alt;
	
	//y is id
	//get src for y
	var srcY = document.getElementById(y).src;
	//get alt for y
	var altY = document.getElementById(y).alt;
	
	//z is id
	//get src for z
	var srcZ = document.getElementById(z).src;
	//get alt for z
	var altZ = document.getElementById(z).alt;
	
	
	
	//turn x into y
	//change src
	changeSRC(x, srcY);
	//change alt
	changeALT(x, altY);
	
	//turn y into z
	//change src
	changeSRC(y, srcZ);
	//change alt
	changeALT(y, altZ);
	
	//turn z into x
	//change src
	changeSRC(z, srcX);
	//change alt
	changeALT(z, altX);
	
	//caption
	document.getElementById("caption").innerHTML = altZ;
}

//move all images right
//x = left image; y = middle image; z = right image;
function slideshowR(x, y, z)
{
	//x is id
	//get src for x
	var srcX = document.getElementById(x).src;
	//get alt for x
	var altX = document.getElementById(x).alt;
	
	//y is id
	//get src for y
	var srcY = document.getElementById(y).src;
	//get alt for y
	var altY = document.getElementById(y).alt;
	
	//z is id
	//get src for z
	var srcZ = document.getElementById(z).src;
	//get alt for z
	var altZ = document.getElementById(z).alt;
	
	
	
	//turn y into x
	//change src
	changeSRC(y, srcX);
	//change alt
	changeALT(y, altX);
	
	//turn z into y
	//change src
	changeSRC(z, srcY);
	//change alt
	changeALT(z, altY);
	
	//turn x into z
	//change src
	changeSRC(x, srcZ);
	//change alt
	changeALT(x, altZ);
	
	//caption
	document.getElementById("caption").innerHTML = altX;
}

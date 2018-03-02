console.log("platform.js loaded!");

function platform(w, x, y){

	console.log("platform spawned");
	
	var width = w;
	var height = 2;
	
	var platX = x;
	var platY = y;
	
	//vars
	this.width = width;
	this.platX = platX;
	this.platY = platY;
	
	var platObj = document.createElement('a-box');
	platObj.setAttribute('scale', w + ' 0.05 0.1');
	platObj.setAttribute('position', x + ' ' + y + ' 0');
	platObj.setAttribute('color', 'brown');
	
	scene.appendChild(platObj);
}

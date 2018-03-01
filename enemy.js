console.log("enemy.js loaded!");

//local
var eX = -0.3; //temp val
var eY = 1.4; //temp val 1.37

function enemy(){

	console.log("Enemy created");
	this.eX = getEX;
	this.eY = getEY;
	
	
	var en = document.createElement('a-box');
	en.setAttribute('position',eX + ' ' + eY + ' 0.02');
	en.setAttribute('scale', SCALE +' ' + SCALE +' '+SCALE);
			
	scene.appendChild(en);
	
}

function getEX(){
	return eX;
}

function getEY(){
	return eY;
}
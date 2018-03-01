console.log("enemy.js loaded!");

//SHIFT ALL VARIABLES INTO FUNCTION!!!!!
var eX = -0.3; //temp val
var eY = 1.4; //temp val 1.37

//var enemyPhys = new physics();
var en = document.createElement('a-box');

function enemy(pX){

	eX = pX;

	console.log("Enemy created");
	this.eX = getEX;
	this.eY = getEY;
	this.setY = setEY;
	this.setPos = setPos;
	
	
	en.setAttribute('scale', SCALE +' ' + SCALE +' '+SCALE);
			
	scene.appendChild(en);

}

function setPos(){
	en.setAttribute('position', eX + ' ' + eY + ' 0.02');
}

function setEY(val){
	eY = val;
}

function getEX(){
	return eX;
}

function getEY(){
	return eY;
}
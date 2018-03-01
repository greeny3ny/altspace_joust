console.log("enemy.js loaded!");

function enemy(pX){

	var en = document.createElement('a-box');

	var eX = -0.3; //temp val
	var eY = 1.4; //temp val 1.37
	
	var destroyed = false;

	eX = pX;

	console.log("Enemy created");
	//vars
	this.eX = eX;
	this.eY = eY;
	this.en = en;
	this.dead = destroyed;
	
	//functions
	this.destroy = setDead;
	this.setPos = setPos;
	
	
	en.setAttribute('scale', SCALE +' ' + SCALE +' '+SCALE);
			
	scene.appendChild(en);

}

function setPos(){
	this.en.setAttribute('position', this.eX + ' ' + this.eY + ' 0.02');
}

function setDead(){
	console.log("enemy destroyed");
	this.dead = true;
	console.log("dropping egg!");
}
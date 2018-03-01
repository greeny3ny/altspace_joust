console.log("enemy.js loaded!");

function enemy(x, y){

	var en = document.createElement('a-box');

	var eX = x; //temp val
	var eY = y; //temp val 1.37
	
	var destroyed = false;
	
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

function setDead(i){
	enemies[i].en.setAttribute('color', 'red');
	scene.remove(enemies[i].en);
	birdsAlive --;
	
	this.dead = true;
	
	console.log("enemy destroyed" + i);
	console.log("dropping egg!");
}
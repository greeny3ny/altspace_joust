console.log("platform.js loaded!");

function platform(w, x, y, i){

	console.log("platform spawned");
	
	var width = w;
	var height = 2;
	var id = i;
	
	var platX = x;
	var platY = y;
	
	//vars
	this.width = width;
	this.platX = platX;
	this.platY = platY;
	this.id = id;
	
	//functions
	this.deCol = detectPlatformCollision;
	
	var platObj = document.createElement('a-box');
	platObj.setAttribute('scale', w + ' 0.05 0.1');
	platObj.setAttribute('position', x + ' ' + y + ' 0');
	platObj.setAttribute('color', 'brown');
	
	scene.appendChild(platObj);
}

var touching = [];
function detectPlatformCollision(x, y, phys){
	var widthHalf = this.width/2;
	var hitFloor = (y-HALFSCALE < (this.platY+0.025) && y-HALFSCALE > (this.platY-0.025));
	var hitRoof  = (y+HALFSCALE > (this.platY-0.025) && y+HALFSCALE < (this.platY+0.025)); //&& playerY+HALFSCALE < (platY-0.025)
	var xCol = (x-HALFSCALE < (this.platX+widthHalf) && x+HALFSCALE > (this.platX-widthHalf));
	
	touching[this.id] = ((hitRoof||hitFloor) && xCol);

	if (hitRoof && xCol){
		phys.roof = this.platY-0.05;
	}
	else{
		if (!(touching[0] || touching[1] || touching[2] || touching[3])){
			phys.roof = 2.3;
		}
	}
	
	if (hitFloor && xCol){
		phys.floor = this.platY+0.05;
	}
	else{
		if (!(touching[0] || touching[1] || touching[2] || touching[3])){
			phys.floor = 1.3;
		}
	}
}
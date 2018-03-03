console.log("enemy.js loaded!");

function enemy(x, y, dir, i){

	var en = document.createElement('a-box');

	var eX = x; //temp val
	var eY = y; //temp val 1.37
	var index = i;
	
	var flapTime = 600;
	
	var destroyed = false;
	
	var direction;
	var collided = false;
	
	if (dir == 1){
		direction="left";
	}
	else
	{
		direction="right";
	}
	
	console.log("Enemy created");
	//vars
	this.eX = eX;
	this.eY = eY;
	this.en = en;
	this.dead = destroyed;
	this.index = i;
	this.direction = direction;
	this.collide = collided;
	
	console.log(this.index);
	
	enPhys[this.index] = new physics(x, y);
	
	//functions
	this.destroy = setDead;
	this.setPos = setPos;
	this.move = movement;
	this.col = enemyCollision;

	en.setAttribute('scale', SCALE +' ' + SCALE +' '+SCALE);
			
	scene.appendChild(en);

}

function setPos(){
	this.en.setAttribute('position', this.eX + ' ' + this.eY + ' 0.02');
}

function setDead(i){
	
	this.dead = true;
	
	console.log("enemy destroyed" + i);
	console.log("dropping egg!");
}

function movement(){
	
	if (!this.dead){
		enPhys[this.index].mtmCng(this.direction);
		enPhys[this.index].fall();
		
		this.col();
		//this.setFlapTime();
		
		this.eX = enPhys[this.index].moveX();
		for (j in platforms){
			platforms[j].deCol(this.eX, this.eY, enPhys[this.index]);
		}
	}
	else{
		this.eX = 100;
		this.eY = 100;
	}
	this.setPos();
}

function enemyCollision(){
	//console.log("test");
	const bumpVal = -0.5;

	for (i in enemies){
		if (i == this.index){
			//comparing against self so do nothing
		} else {
			var cE = detectEnemyCollision(this.eX, this.eY,i); //refactor!
			if (cE == "win" || cE =="lose" || cE=="bump"){
				if (!this.collide){
					enPhys[this.index].Xmom = -enPhys[this.index].Xmom;
					if (this.direction == "right"){
						this.direction = "left";
						this.eX = this.eX-bumpVal;
						//enemies[i].eX = enemies[i]+bumpVal;
					}
					else
					{
						this.direction="right";
						this.eX = this.eX+bumpVal;
						//enemies[i].eX = enemies[i]+bumpVal;
					}
				}
				this.collide = true;
			}
			else{
				this.collide = false;
			}
		}	
	}
}//end function

			
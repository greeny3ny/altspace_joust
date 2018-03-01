console.log("physics.js loaded!");

const FLOOR = 1.37; //default : 1.37 

function physics(){
	console.log("physics object created");
	
	var posX = 0;
	var posY = FLOOR;
	var X_Momentum = 0;
	var Y_Momentum = 0;
	
	//VARIABLES
	this.posX = posX;
	this.posY = posY;
	this.Xmom = X_Momentum;
	this.Ymom = Y_Momentum;
	
	//RETURN FUNCTIONS
	this.moveX = moveX;
	
	//NO RETURN FUNCTIONS
	this.jump = jump;
	this.fall = fall;
	this.mtmCng = momentumChange;
}

function jump(){
	console.log("jump");
	const UPFORCE = 0.006;
	this.Ymom += UPFORCE;
	if (this.Ymom > UPFORCE){
		this.Ymom = UPFORCE; //caps force (incase button is spammed)
	}
}

function fall(){
	const ROOF = 2.3;
	const GRAVITY = 0.0004;
	const DOWNCAP = 0.001; //CAP ON HOW FAST THE OBJECT CAN FALL
	
	this.posY += this.Ymom;

	if (this.posY > ROOF){
		this.posY = ROOF;
	}
		
	if (this.posY > FLOOR){
		if (this.Ymom < -DOWNCAP){
			this.Ymom = -DOWNCAP;
		}
		this.posY += this.Ymom;
		this.Ymom -= GRAVITY;
	}
	else
	{
		this.Ymom = 0;
		this.posY = FLOOR;
	}
}

function moveX(){
	const LEFTWALL = -0.5; //TRY 0.4 ??
	const RIGHTWALL = 0.5;
	const STOPPINGFORCE = 0.0005; // POSSIBLE MERGE WITH SIDEFORCE??
	const SPEEDCAP = 0.015;

	this.posX += this.Xmom;
	
	//side loop
	if (this.posX > RIGHTWALL){
		this.posX = LEFTWALL;
	} else if (this.posX < LEFTWALL){
		this.posX = RIGHTWALL;
	}
	//-- momentum stuff --	
	//issue here - when player changes direction, momentum doesnt stop...
	if (this.Xmom > STOPPINGFORCE){
		this.Xmom -= STOPPINGFORCE;
	} else if (this.Xmom < -STOPPINGFORCE){
		this.Xmom += STOPPINGFORCE;
	}
	else{
		this.Xmom = 0;
	}
	
	//Caps speed
	if (this.Xmom > SPEEDCAP){
		this.Xmom = SPEEDCAP;
	}
	else if (this.Xmom < -SPEEDCAP){
		this.Xmom = -SPEEDCAP;
	}
	return this.posX;
}

function momentumChange(dir){
	const SIDEFORCE = 0.0008;
	if (dir == "left"){
		this.Xmom -= SIDEFORCE;
	} else if (dir == "right"){
		this.Xmom += SIDEFORCE;
	}
}

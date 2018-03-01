console.log("physics.js loaded!");

const FLOOR = 1.37; //default : 1.37 

var Y_Momentum = 0;
var X_Momentum = 0;
var posY = FLOOR;
var posX = 0;
//-------

function physics(){
	console.log("physics object created");
	
	//RETURNS
	this.posX = getPX;
	this.posY = getPY;
	
	//NO RETURN
	this.jump = jump;
	this.fall = fall;
	this.moveX = moveX;
}

function getPY(){
	return posY;
}

function getPX(){
	return posX;
}

function jump(){
	console.log("jump");
	const UPFORCE = 0.006;
	Y_Momentum += UPFORCE;
	if (Y_Momentum > UPFORCE){
		Y_Momentum = UPFORCE; //caps force (incase button is spammed)
	}
}

function fall(){
	const ROOF = 2.3;
	const GRAVITY = 0.0004;
	const DOWNCAP = 0.001; //CAP ON HOW FAST THE OBJECT CAN FALL
	
	posY += Y_Momentum;

	if (posY > ROOF){
		posY = ROOF;
	}
		
	if (posY > FLOOR){
		if (Y_Momentum < -DOWNCAP){
			Y_Momentum = -DOWNCAP;
		}
		posY += Y_Momentum;
		Y_Momentum -= GRAVITY;
	}
	else
	{
		Y_Momentum = 0;
		posY = FLOOR;
	}
}

function moveX(){
	const LEFTWALL = -0.5; //TRY 0.4 ??
	const RIGHTWALL = 0.5;
	const STOPPINGFORCE = 0.0005; // POSSIBLE MERGE WITH SIDEFORCE??
	const SPEEDCAP = 0.015;
		
	posX += X_Momentum;
			
	//side loop
	if (posX > RIGHTWALL){
		posX = LEFTWALL;
	} else if (posX < LEFTWALL){
		posX = RIGHTWALL;
	}
			
	//issue here - when player changes direction, momentum doesnt stop...
	if (X_Momentum > STOPPINGFORCE){
		X_Momentum -= STOPPINGFORCE;
	} else if (X_Momentum < -STOPPINGFORCE){
		X_Momentum += STOPPINGFORCE;
	}
	else{
		X_Momentum = 0;
	}
	
	//Caps speed
	if (X_Momentum > SPEEDCAP){
		X_Momentum = SPEEDCAP;
	}
	else if (X_Momentum < -SPEEDCAP){
		X_Momentum = -SPEEDCAP;
	}
}
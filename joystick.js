console.log("joystick.js loaded!");

function joystickLeft(){
	document.querySelector('#joystick').setAttribute('rotation', "0 0 45");	
	playerPhys.mtmCng("left");	
	if (joyOr != "left"){
		document.querySelector('#joystick').emit("left");
	}
	joyOr = "left";
}
		
function joystickRight(){
	document.querySelector('#joystick').setAttribute('rotation', "0 0 -45");
	playerPhys.mtmCng("right");	
	if (joyOr != "right"){
		document.querySelector('#joystick').emit("right");
	}
	joyOr = "right";
}
		
function joystickCenter(){
	document.querySelector('#joystick').setAttribute('rotation', "0 0 0");
	if (joyOr == "right"){
		document.querySelector('#joystick').emit("cenFromRight");
	} else if (joyOr == "left"){
		document.querySelector('#joystick').emit("cenFromLeft");
	}
	joyOr = "center";	
}
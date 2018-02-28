var eX = -0.3;

function enemy(){

	console.log("Enemy created");
	this.eX = getEX;
	var eY = FLOOR;
			
	var en = document.createElement('a-box');
	en.setAttribute('position',eX + ' ' + eY + ' 0.02');
	en.setAttribute('scale', SCALE +' ' + SCALE +' '+SCALE);
	//en.
			
	scene.appendChild(en);
	
	
}

function getEX(){
	return eX;
}
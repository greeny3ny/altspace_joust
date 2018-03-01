console.log("collision.js loaded!");

function detectCollision(){
	
	for (i in enemies){
	var eX = enemies[i].eX;
	var eY = enemies[i].eY;
	const eZ = 0.02;
			
	var xCol = (playerX-0.0375 < (eX+0.0375) && playerX+0.0375 > (eX-0.0375));
	var yCol = (playerY-0.0375 < (eY+0.0375) && playerY+0.0375 > (eY-0.0375));
			
	if (xCol && yCol){
		if (playerY > eY){
			console.log("player win");
			enemies[i].destroy(i);
			
			
		}
		else if (eY > playerY){
			console.log("enemy win");
			enemies[i].en.setAttribute('color', 'green');
		}
		else {
			console.log("bump");
		}

	}
	}	
}
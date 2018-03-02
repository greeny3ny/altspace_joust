console.log("collision.js loaded!");



function detectEnemyCollision(){

	for (i in enemies){
		var eX = enemies[i].eX;
		var eY = enemies[i].eY;
		const eZ = 0.02;
				
		var xCol = (playerX-HALFSCALE < (eX+HALFSCALE) && playerX+HALFSCALE > (eX-HALFSCALE));
		var yCol = (playerY-HALFSCALE < (eY+HALFSCALE) && playerY+HALFSCALE > (eY-HALFSCALE));
				
		if (xCol && yCol){
			if (playerY > eY){
				console.log("player win");
				
				destroy(i);
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

function detectPlatformCollision(){
	
	//var xCol = (playerX-0.0375 < (eX+0.0375) && playerX+0.0375 > (eX-0.0375));
	//var yCol = (playerY-HALFSCALE < (eY+HALFSCALE) && playerY+HALFSCALE > (eY-HALFSCALE));
	
	//for (j in platforms){
		var j = 0
		var platX = platforms[j].platX;
		var platY = platforms[j].platY;
		var widthHalf = platforms[j].width/2;
		
		var hitFloor = (playerY-HALFSCALE < (platY+0.025) && playerY-HALFSCALE > (platY-0.025));
		var hitRoof  = (playerY+HALFSCALE > (platY-0.025) && playerY+HALFSCALE < (platY+0.025)); //&& playerY+HALFSCALE < (platY-0.025)
		
		console.log(hitRoof);
		//var yCol = (playerY-HALFSCALE < (platY+0.025) && playerY+HALFSCALE > (platY-0.025));
		var xCol = (playerX-HALFSCALE < (platX+widthHalf) && playerX+HALFSCALE > (platX-widthHalf));
		
		if (hitRoof && xCol){
			console.log("roof hit");
			playerPhys.roof = platY-0.05;
		}
		else{
			playerPhys.roof = 2.3;
		}
		
		//console.log(xCol + " | " + yCol);
		
		if (hitFloor && xCol){
			playerPhys.floor = platY+0.05;
			console.log("collision " + playerPhys.floor);
		}
		else{
			playerPhys.floor = 1;
		}
		//console.log(platY);
	//}
	
}

function destroy(i){
	
	enemies[i].en.setAttribute('color', 'red');
	scene.remove(enemies[i].en);
	birdsAlive --;
			
	enemies[i].destroy(i);	
	
}
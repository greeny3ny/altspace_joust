console.log("collision.js loaded!");

function detectEnemyCollision(x, y, i){
	var eX = enemies[i].eX;
	var eY = enemies[i].eY;
				
	var xCol = (x-HALFSCALE < (eX+HALFSCALE) && x+HALFSCALE > (eX-HALFSCALE));
	var yCol = (y-HALFSCALE < (eY+HALFSCALE) && y+HALFSCALE > (eY-HALFSCALE));
				
	if (xCol && yCol){
		if (y > eY){
			return "win";
		}
		else if (eY > y){
			return "lose";
		}
		else {
			return "bump";
		}

	}
}	


function destroy(i){
	
	enemies[i].en.setAttribute('color', 'red');
	scene.remove(enemies[i].en);
	birdsAlive --;
			
	enemies[i].destroy(i);	
	
}
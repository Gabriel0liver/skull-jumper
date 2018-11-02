Game.prototype.handleKeyDown = function(event){
	if (event.key === 'ArrowUp'){

	}if (event.key === 'ArrowRight'){
		if(this.character.xSpeed < 4){
			this.character.xSpeed += 4;
		}
	}if (event.key === 'ArrowLeft'){
		if(this.character.xSpeed > -4){
			this.character.xSpeed += -4;
		}
	}if (event.key === "ArrowUp"){
    this.jump()
  }
}

Game.prototype.handleKeyUp = function(event){
	if (event.key === 'ArrowUp'){

	}if (event.key === 'ArrowRight'){
		this.character.xSpeed = 0;	
	}if (event.key === 'ArrowLeft'){
		this.character.xSpeed = 0;
	}
}

Game.prototype.jump = function(){
  if(!this.character.jumped){
    this.character.y += -10;
    this.time = -35;
    this.character.jumped = true;
  }
  
}
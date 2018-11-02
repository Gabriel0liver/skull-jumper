Game.prototype.handleKeyDown = function(event){
	if (event.key === 'ArrowUp'){

	}if (event.key === 'ArrowRight'){
		if(this.character.xSpeed < 1){
			this.character.xSpeed += 1;
		}
	}if (event.key === 'ArrowLeft'){
		if(this.character.xSpeed > -1){
			this.character.xSpeed += -1;
		}
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
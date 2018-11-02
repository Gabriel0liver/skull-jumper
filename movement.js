Game.prototype.handleKeyDown = function(event){
  if (event.key === 'ArrowRight'){
    console.log()
    if(this.character.leftIsDown === false){
      this.character.rightIsDown = true;
      this.character.rightLeftDown = false;
    }else if(this.character.leftIsDown === true){
      this.character.rightLeftDown = true;
    } 
  }

  if (event.key === 'ArrowLeft'){
    if(this.character.rightIsDown === false){
      this.character.leftIsDown = true;
      this.character.rightLeftDown = false;
    }else if(this.character.rightIsDown === true){
      this.character.rightLeftDown = true;
    }
  }

  if (event.key === " "){
    this.jump()
  }

}

Game.prototype.handleKeyUp = function(event){
	if (event.key === 'ArrowRight'){
    if(this.character.rightLeftDown){
      this.character.leftIsDown = true;
      this.character.rightIsDown = false;
      this.character.rightLeftDown = false;
    }else{
      this.character.leftIsDown = false;
      this.character.rightIsDown = false;
    }
  }
  if (event.key === 'ArrowLeft'){
    if(this.character.rightLeftDown){
      console.log("hey")
      this.character.leftIsDown = false;
      this.character.rightIsDown = true;
      this.character.rightLeftDown = false;
    }else{
      this.character.leftIsDown = false;
      this.character.rightIsDown = false;
    }
	}
}

Game.prototype.movement = function(){
  if(!this.character.rightIsDown && !this.character.leftIsDown){
    this.character.xSpeed = 0;
  }else if(this.character.rightLeftDown){
    this.character.xSpeed = 0;
  }else if(this.character.rightIsDown){
    this.character.xSpeed = 4;
  }else if(this.character.leftIsDown){
    this.character.xSpeed = -4;
  }else{
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
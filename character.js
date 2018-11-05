function Character(){
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 10;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.size = 50;
    this.gravity = 0.5;
    this.jumped = true;
    this.rightIsDown = false;
    this.leftIsDown = false;
    this.rightLeftDown = false;
    this.walkingRight = true;
    this.createAnimations()
    this.collisionRight = false;
    this.collisionLeft = false;
    this.collisionBottom = false;
}

Character.prototype.render = function(game){
    if(this.xSpeed > 0){
        this.walkingRight = true;
    }else if(this.xSpeed < 0){
        this.walkingRight = false;
    }
    if(this.jumped && this.walkingRight){
        this.jumpAnimationRight.renderChar(game);
    }else if(this.jumped && !this.walkingRight){
        this.jumpAnimationLeft.renderChar(game);
    }else if(this.xSpeed > 0){
        this.walkingAnimationRight.renderChar(game);
         
    }else if (this.xSpeed < 0){
        this.walkingAnimationLeft.renderChar(game);
        this.walkingRight = false;
    }else if (this.walkingRight === true){
        this.idleAnimationRight.renderChar(game);
    }else if (this.walkingRight === false){
        this.idleAnimationLeft.renderChar(game);
    }
}

Character.prototype.createAnimations = function(){
    this.walkingAnimationRight = new Animation();
    this.walkingAnimationRight.spriteSheet.src = "./images/walkingRight.png";
    this.walkingAnimationRight.amountOfFrames = 4;
    this.walkingAnimationLeft = new Animation();
    this.walkingAnimationLeft.spriteSheet.src = "./images/walkingLeft.png";
    this.walkingAnimationLeft.amountOfFrames = 4;
    this.idleAnimationRight = new Animation();
    this.idleAnimationRight .spriteSheet.src = "./images/idleRight.png";
    this.idleAnimationRight .amountOfFrames = 1;
    this.idleAnimationLeft = new Animation();
    this.idleAnimationLeft .spriteSheet.src = "./images/idleLeft.png";
    this.idleAnimationLeft .amountOfFrames = 1;
    this.jumpAnimationRight = new Animation();
    this.jumpAnimationRight.spriteSheet.src = "./images/jumpRight.png";
    this.jumpAnimationRight.amountOfFrames = 1;
    this.jumpAnimationLeft = new Animation();
    this.jumpAnimationLeft.spriteSheet.src = "./images/jumpLeft.png";
    this.jumpAnimationLeft.amountOfFrames = 1;
}
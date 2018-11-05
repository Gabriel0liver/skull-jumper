function Enemy(){
  this.x = 450;
  this.y = 152;
  this.pathWaypoint1 = 300;
  this.pathWaypoint2 = 650;
  this.createAnimations();
  this.movingRight = false;
  this.movingLeft = true;
}

Enemy.prototype.createAnimations = function(){
  this.enemyAnimationLeft = new Animation();
  this.enemyAnimationLeft.spriteSheet.src = "./images/enemyWalkingLeft.png";
  this.enemyAnimationLeft.amountOfFrames = 4;
  this.enemyAnimationRight = new Animation();
  this.enemyAnimationRight.spriteSheet.src = "./images/enemyWalkingRight.png";
  this.enemyAnimationRight.amountOfFrames = 4;
}

Enemy.prototype.render = function(game){
  if(this.movingLeft){
    this.enemyAnimationLeft.renderEnemy(game);
  }else{
    this.enemyAnimationRight.renderEnemy(game);
  }
}

Enemy.prototype.move = function(){
  if(this.x === this.pathWaypoint2){
    this.movingLeft = true;
    this.movingRight = false;
  }else if(this.x === this.pathWaypoint1){
    this.movingLeft = false;
    this.movingRight = true;
  }
  if(this.movingLeft){
    this.x += -1;
  }else{
    this.x += 1;
  }
}

Game.prototype.createEnemies = function(){
  
}
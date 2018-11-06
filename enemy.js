function Enemy(){
  this.x = 500;
  this.y = 0;
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
    this.enemyAnimationLeft.renderEnemy(this);
  }else{
    this.enemyAnimationRight.renderEnemy(this);
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
  this.enemy1 = new Enemy;
  this.enemy1.x = 500;
  this.enemy1.y = 352 ;
  this.enemy1.pathWaypoint1 = 400;
  this.enemy1.pathWaypoint2 = 550;
  this.enemy2 = new Enemy;
  this.enemy2.x = 500;
  this.enemy2.y = 402 ;
  this.enemy2.pathWaypoint1 = 450;
  this.enemy2.pathWaypoint2 = 520;
  this.enemy3 = new Enemy;
  this.enemy3.x = 250;
  this.enemy3.y = 352;
  this.enemy3.pathWaypoint1 = 120;
  this.enemy3.pathWaypoint2 = 310;
  this.enemy4 = new Enemy;
  this.enemy4.x = 400;
  this.enemy4.y = 302 ;
  this.enemy4.pathWaypoint1 = 370;
  this.enemy4.pathWaypoint2 = 575;
  this.enemy5 = new Enemy;
  this.enemy5.x = 700;
  this.enemy5.y = 252 ;
  this.enemy5.pathWaypoint1 = 620;
  this.enemy5.pathWaypoint2 = 920;
}
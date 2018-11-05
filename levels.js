function Levels (game){
  this.level1 = [game.block1,game.block2];
  this.level2 = [game.block3,game.block4,game.block5];
  this.level3 = [game.block3,game.block4,game.block6,game.block7];
  this.level4 = [game.block3,game.block4,game.block8]; 
  this.enemies4 = [game.enemy1];
  this.level5 = [game.block9,game.block10,game.block4]
  this.enemies5 = [game.enemy2];
  this.levelArray = [this.level1,this.level2,this.level3,this.level4,this.level5];
  this.enemiesArray = [[],[],[],this.enemies4,this.enemies5]
  this.currentEnemies = [];
  this.currentLevelIndex = 0;
  this.characterX;
  this.characterY;
}

Levels.prototype.renderLevel = function(){
  this.currentLevel = this.levelArray[this.currentLevelIndex]
  this.currentLevel.forEach(function(block){
    block.render();
  });
}

Levels.prototype.renderEnemies = function(game){
  this.currentEnemies = this.enemiesArray[this.currentLevelIndex]
  this.currentEnemies.forEach(function(enemy){
    enemy.render(game);
  })
}

Levels.prototype.nextLevel = function(){
  this.currentLevelIndex ++;
  if(this.currentLevelIndex > this.levelArray.length-1){
    this.gameIsOver = true;
    this.finishGame();
  }
  return 0;
}

Levels.prototype.finishGame = function() {
  this.gameOverCallback();
}

Levels.prototype.onGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}

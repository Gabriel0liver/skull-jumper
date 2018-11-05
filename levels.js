function Levels (game){
  this.level1 = [game.block1,game.block2,game.block3];
  this.level2 = [game.block1,game.block4,game.block3];
  this.levelArray = [this.level1,this.level2];
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

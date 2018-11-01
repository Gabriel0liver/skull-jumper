# Project's name

## Description
Skull jumper is a game where the objective is to control the main character and make him go from one side of the sreen to the other. On the way you will come accross challanges like jumping over big drops.


## MVP (DOM - CANVAS)
*CANVAS*, The mvp is a game where the player can move and jump


## Backlog
-Enemies
-Multiple levels
-Sprites
-Moving platforms


## Data structure
### game.js
```
Game(){
  this.canvas;
  this.ctx;
}

Game.prototype.startGame(){
}

Game.prototype.startLoop(){
}

Game.prototype.loop(){
}

Game.prototype.updateAll(){
}

Game.prototype.clearAll(){
}

Game.prototype.renderAll(){
}

Game.prototype.collison(){
}
```

### character.js
```
Character(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Character.prototype.update(){
}

Character.prototype.move(){
}

Character.prototype.collision(){
}

Character.prototype.death(){
}

Character.prototype.win(){
}

Character.prototype.gravity(){
}

Character.prototype.jump(){
}

Character.prototype.render(){
}
```

### block.js
```
Block(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Block.prototype.render(){
}
```


## States y States Transitions
```
- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else startGame) 
```


## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Game - buildDom
- Game - TimeOut test
- Main - GameWon
- Main - destroy Game
- Main - GameWon RESTART
- Main - removeGameWon
- Game - restartGame
- Game - addEventListener
- Game - create player
- Player - create
- Player - move
- Player - gravity
- Block - create
- Player - collision
- Player - jump


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Gabriel0liver/skull-jumper)
[Link Deploy](https://Gabriel0liver.github.io/skull-jumper/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)

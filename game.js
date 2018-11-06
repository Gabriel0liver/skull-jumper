"use strict";

function Game(){
	this.collision = false;
	this.time = 0;
}


Game.prototype.start = function () {
	this.canvas = document.querySelector("canvas");
	this.ctx = this.canvas.getContext("2d");

	this.canvas.width = 960;
	this.canvas.height = 540;

	this.createBlocks();
	this.createEnemies();

	this.character = new Character();
	this.levels = new Levels(this);
	
	this.totalTime = 0;
	this.convertedTime;

	//myAudio.play();

	//this.enemies = [this.enemy1,this.enemy2]

	this.levels.gameIsOver = false;

	
	
	this.startLoop();

	document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
	document.body.addEventListener('keyup', this.handleKeyUp.bind(this));
}

Game.prototype.startLoop = function(){
	function loop(){
		this.renderAll();
		this.update();
		this.totalTime ++;
		this.convertedTime = this.convertTime(this.totalTime)
		if(!this.levels.gameIsOver){
		window.requestAnimationFrame(loop.bind(this));
		}
		document.querySelector("p").innerHTML = this.convertedTime;
	}
	window.requestAnimationFrame(loop.bind(this));
}

Game.prototype.update = function(){
	this.movement();
	this.enemy1.move();
	this.enemy2.move();
	this.enemy3.move();
	this.enemy4.move();
	this.enemy5.move();
	this.character.x += this.character.xSpeed;
	this.checkCollisions();
}

Game.prototype.renderAll = function () {
	this.ctx.fillStyle = "#DEE5E5";
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.ctx.fillStyle = "#161616";
	this.levels.renderLevel();
	this.levels.renderEnemies(this);
	this.character.render(this);
	
}

	var myAudio = document.createElement("audio");
	myAudio.src = ("./sounds/music.mp3");
	

Game.prototype.convertTime = function(time){
	time = Math.floor(time/60);
	var minutes = Math.floor(time/60);
	var seconds = time%60
	if(minutes<10){
		minutes = "0"+minutes;
	}
	if(seconds<10){
		seconds = "0"+seconds;
	}
	return minutes+":"+seconds;
}
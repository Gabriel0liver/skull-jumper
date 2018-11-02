"use strict";

function Game(){
	
}

var time = 0;


Game.prototype.start = function () {
	this.canvas = document.querySelector("canvas");
	this.ctx = this.canvas.getContext("2d");

	this.canvas.width = 960;
	this.canvas.height = 540;

	this.character = new Character();
	gameIsOver = false;
	this.startLoop();

	document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
	document.body.addEventListener('keyup', this.handleKeyUp.bind(this));
}

Game.prototype.startLoop = function(){
	function loop(){
		this.update();
		this.render();
		if(!gameIsOver){
		window.requestAnimationFrame(loop.bind(this));
		}
	}
	window.requestAnimationFrame(loop.bind(this));
}

Game.prototype.update = function(){
	this.character.x += this.character.xSpeed;
	time += 1;
	this.character.ySpeed = this.character.gravity * time;
	this.character.y += this.character.ySpeed;	
}

Game.prototype.render = function () {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.character.render();
}


var game = new Game();
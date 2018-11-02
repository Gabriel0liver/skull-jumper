"use strict";

function Game(){
	
}


Game.prototype.start = function () {
	gameIsOver = false;

	this.canvas = document.querySelector("canvas");
	this.ctx = this.canvas.getContext("2d");

	this.canvas.width = 960;
	this.canvas.height = 540;

	this.character = new Character();
	
	this.collision = false;
	this.time = 0;
	this.startLoop();

	this.createBlocks();
	this.blocks = [this.block1,this.block2,this.block3];

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
	this.checkCollisions();
	if(!this.collision){
		this.time += 1;
		this.character.ySpeed = this.character.gravity * this.time;
		this.character.y += this.character.ySpeed;	
	}
	if(this.character.y + this.character.size > this.canvas.height)	{
		this.character.y = 400;
		this.character.x = 0;
	}
	if(this.character.x + this.character.size > this.canvas.width){
		buildWinGame();
	}
}

Game.prototype.render = function () {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.character.render();
	this.blocks.forEach(function(block){
		block.render();
	})
}

Game.prototype.checkCollisions = function(){
	this.blocks.forEach(function(block){
		var collidesRight = this.character.x + this.character.size > block.x;
		var collidesLeft = this.character.x< block.x + block.size;
		var collidesTop = this.character.y - this.character.size < block.y;
		var collidesBottom = this.character.y + this.character.size > block.y;

		if (collidesBottom && collidesLeft && collidesRight) {
			this.character.y = block.y - this.character.size;
			this.collision = true;
			this.character.jumped = false;
			this.time = 0
		}else{
			this.collision = false;
		}
	}.bind(this))
}


var game = new Game();
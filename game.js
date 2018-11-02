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

	gameIsOver = false;

	this.character = new Character();
	
	this.startLoop();

	this.createBlocks();
	this.blocks = [this.block1,this.block2,this.block3];

	document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
	document.body.addEventListener('keyup', this.handleKeyUp.bind(this));
}

Game.prototype.startLoop = function(){
	function loop(){
		this.update();
		this.renderAll();
		if(!gameIsOver){
		window.requestAnimationFrame(loop.bind(this));
		}
	}
	window.requestAnimationFrame(loop.bind(this));
}

Game.prototype.update = function(){
	this.movement();
	this.character.x += this.character.xSpeed;
	this.checkCollisions();
}

Game.prototype.renderAll = function () {
	this.ctx.fillStyle = "#DEE5E5";
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	this.ctx.fillStyle = "#161616";
	this.character.render(this);
	this.blocks.forEach(function(block){
		block.render();
	})
}

Game.prototype.checkCollisions = function(){
	var collisions = 0;
	this.blocks.forEach(function(block){
		var collidesRight = this.character.x + this.character.size > block.x;
		var collidesLeft = this.character.x< block.x + block.size;
		var collidesTop = this.character.y - this.character.size < block.y;
		var collidesBottom = this.character.y + this.character.size >= block.y;

		if (collidesBottom && collidesLeft && collidesRight && collidesTop) {
			this.character.jumped = false;
			this.character.y = block.y - this.character.size;
			this.collision = true;
			this.time = 0
			collisions++;
		}else{
			this.collision = false;
		}
	}.bind(this))

	if(collisions === 0){
		this.character.jumped = true;
	}

	if(!this.collision){
		this.time += 1;
		this.character.ySpeed = this.character.gravity * this.time;
		this.character.y += this.character.ySpeed;
	}
	if(this.collision){
		this.character.jumped = false;
	}
	if(this.character.y > this.canvas.height)	{
		this.character.y = 400;
		this.character.x = 0;
	}
	if(this.character.x + this.character.size > this.canvas.width){
		buildWinGame();
	}
	
}


var game = new Game();
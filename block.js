function Block(){
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.size = 50;

}

Block.prototype.render = function(){
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Game.prototype.createBlocks = function(){
	this.block1 = new Block();
	this.block1.x = 0;
	this.block1.y = 400;
	this.block1.size = 300;
	this.block2 = new Block();
	this.block2.x = 300;
	this.block2.y = 200;
	this.block2.size = 400;
	this.block3 = new Block();
	this.block3.x = 800;
	this.block3.y = 400;
    this.block3.size = 200;
    this.block4 = new Block();
    this.block4.x = 400;
    this.block4.y = 250;
    this.block4.size = 75;
}
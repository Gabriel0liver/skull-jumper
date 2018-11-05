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
    this.block1.size = 350;
	this.block2 = new Block();
	this.block2.x = 650;
	this.block2.y = 400;
	this.block2.size = 350;
	this.block3 = new Block();
	this.block3.x = 0;
	this.block3.y = 400;
    this.block3.size = 200;
    this.block4 = new Block();
    this.block4.x = 800;
    this.block4.y = 400;
    this.block4.size = 200;
    this.block5 = new Block();
    this.block5.x = 500;
    this.block5.y = 400;
    this.block5.size = 50;
    this.block6 = new Block();
    this.block6.x = 150;
    this.block6.y = 250;
    this.block6.size = 50;
    this.block7 = new Block();
    this.block7.x = 250;
    this.block7.y = 150;
    this.block7.size = 50;
    this.block8 = new Block();
    this.block8.x = 400;
    this.block8.y = 400;
    this.block8.size = 200;
    this.block9 = new Block();
	this.block9.x = 0;
	this.block9.y = 400;
    this.block9.size = 150;
    this.block10 = new Block();
	this.block10.x = 450;
	this.block10.y = 450;
    this.block10.size = 100;
    this.block11 = new Block();
	this.block10.x = 450;
	this.block10.y = 450;
    this.block10.size = 120;
}
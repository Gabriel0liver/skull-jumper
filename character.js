function Character(){
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.size = 50;
    this.gravity = 0.3;

}

Character.prototype.render = function(){
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}
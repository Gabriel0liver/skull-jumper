"use strict";

function Game(){
}

Game.prototype.start = function () {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 1280;
    this.canvas.height = 720;

    setTimeout(buildWinGame, 3000);

};
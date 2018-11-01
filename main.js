"use strict";

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

var buildWinGame;

function main(){

    var splashDom;
    var gameDom;
    var winDom;
    var buttonStartListner;
    var buttonRestartListner;

    function buildSplash(){

        splashDom = buildDom(`
            <main>
                <h1>SKULL JUMPER</h1>
                <button>Start</button>
            </main>
        `);

        document.body.appendChild(splashDom);

        var button = splashDom.querySelector('button');
        buttonStartListner = button.addEventListener('click', buildGameScreen);

        //buildGameScreen();
    }

    function destroySplash(){
        splashDom.remove();
        button.removeEventListner(buttonStartListner);
    }

    function buildGameScreen(){
        destroySplash();
        destroyWinGame();

        gameDom = buildDom(`
            <main class="game container">
                <div class="canvas">
                    <canvas></canvas>
                </div>
            </main>
        `);

        document.body.appendChild(gameDom);

        var game = new Game();
        game.start();

    }

    function destroyGameScreen(){
        gameDom.remove();
    }

    buildWinGame = function(){
        destroyGameScreen();
        
        winDom = buildDom(`
            <main>
                <h1>YOU WIN!</h1>
                <button>Restart</button>
            </main>
        `);

        document.body.appendChild(winDom);

        var button = winDom.querySelector('button');
        buttonRestartListner = button.addEventListener('click', buildGameScreen);
        
    }

    function destroyWinGame(){
        if(winDom){
            winDom.remove();
            button.removeEventListner(buttonRestartListner);
        }
    }

    buildSplash();

}

window.addEventListener('load', main);
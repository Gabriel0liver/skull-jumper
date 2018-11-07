"use strict";

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main(){

    var splashDom;
    var gameDom;
    var winDom;
    var buttonStartListner;
    var buttonRestartListner;
    var buttonHoverListner;
    var buttonStart;
    var buttonReset;

    function buildSplash(){

        splashDom = buildDom(`
            <main class="splash">
                <h1>SKULL JUMPER</h1>
                <button class="hvr-grow">Start</button>
            </main>
        `);

        document.body.appendChild(splashDom);

        buttonStart = splashDom.querySelector('button');
        buttonStartListner = buttonStart.addEventListener('click', buildGameScreen);
        buttonHoverListner = buttonStart.addEventListener("mouseover",makeClickSound);

        //buildGameScreen();
    }

    function makeClickSound(){
        clickSound.play()
    }

    function destroySplash(){
        splashDom.remove();
        buttonStart.removeEventListener("click",buttonStartListner);
    }

    function buildGameScreen(){
        destroySplash();
        destroyWinGame();

        gameDom = buildDom(`
            <main class="game container">
                <div class="canvas">
                    <div class="header">
                        <p></p>
                        <section>
                        Level
                        </section>
                    </div>
                    <canvas></canvas>
                </div>
            </main>
        `);

        document.body.appendChild(gameDom);

        var game = new Game();
        game.start();
        game.levels.onGameOverCallback(buildWinGame);


    }

    function destroyGameScreen(){
        gameDom.remove();
        
    }

    function buildWinGame(time){
        destroyGameScreen();
        
        winDom = buildDom(`
            <main class="win">
                <h1>YOU WIN!</h1>
                <section></section>
                <form>
                    Name:
                    <input type="text" name="name">
                </form>
                <div>
                    <h4>High scores:</h4>
                </div>
                <button class="hvr-grow">Restart</button>
            </main>
        `);

        document.body.appendChild(winDom);

        document.querySelector("section").innerText = "Your time:  "+time;

        buttonReset = winDom.querySelector('button');
        buttonRestartListner = buttonReset.addEventListener('click', buildGameScreen);
        buttonHoverListner = buttonReset.addEventListener("mouseover",makeClickSound);

        
    }

    function destroyWinGame(){
        if(winDom){
            winDom.remove();
            buttonReset.removeEventListener("click",buttonRestartListner);
        }
    }

    buildSplash();

}

window.addEventListener('load', main);
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
                    <div class="black-bo"></div>
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

    function buildWinGame(time1){
        destroyGameScreen();
        
        timeDisplay = time1
        //console.log(timeDisplay)

        winDom = buildDom(`
            <main class="win">
                <h1>YOU WIN!</h1>
                <section></section>
                <label for="name">Name: </label>
                <input type="text" name="name" id="userInput">
                <button id="submit" class="hvr-grow" onClick="storeScore()">Submit</button>
                <div>
                    <h4>High scores:</h4>
                    <ul>
                        <li id="1"></li>
                        <li id="2"></li>
                        <li id="3"></li>
                        <li id="4"></li>
                        <li id="5"></li>
                    </ul>
                </div>
                <button class="hvr-grow button" id="reset">Restart</button>
            </main>
        `);

        document.body.appendChild(winDom);

        scores = JSON.parse(localStorage.getItem("scores"))

        document.querySelector("section").innerText = "Your time:  "+time1;
        if(scores.length > 0){
            document.getElementById("1").innerText = "1-" + scores[0].name + ": " + scores[0].timeDisplay;
        }
        if(scores.length > 1){
            document.getElementById("2").innerText = "2-" + scores[1].name + ": " + scores[1].timeDisplay;
        }
        if(scores.length > 2){
            document.getElementById("3").innerText = "3-" + scores[2].name + ": " + scores[2].timeDisplay;
        }
        if(scores.length > 3){
            document.getElementById("4").innerText = "4-" + scores[3].name + ": " + scores[3].timeDisplay;
        }
        if(scores.length > 4){
            document.getElementById("5").innerText = "5-" + scores[4].name + ": " + scores[4].timeDisplay;
        }

        buttonReset = document.getElementById('reset');
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

function storeScore(){
    var newName = document.getElementById("userInput").value;
    var timeArray = timeDisplay.split(":");
    var minutes = parseFloat(timeArray[0]);
    var seconds = parseFloat(timeArray[1]);

    var totalSeconds = minutes*60+seconds;
    var foundName = false;

    scores.forEach(function(object){
        if(object.name === newName){
            foundName = true;
        }
    })
    
    if(!foundName){
    scores.push({
        name: newName,
        timeDisplay: timeDisplay,
        seconds: totalSeconds
    });
    
    }
    scores.sort(function(a,b){
        return a.seconds -b.seconds;
    })
    

    localStorage.setItem("scores",JSON.stringify(scores))
}

var scores = JSON.parse(localStorage.getItem("scores"))

var timeDisplay;






//document.querySelector().appendChild
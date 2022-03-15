// Jason & Rowan 2022 Global Game Jam

import * as map from "./map.js";
import * as infoBoard from "./infoBoard.js";

// Model
let defaultGameData = {
  players : [
    {
      name : "player one",
      character : "Harry",
      hp : 40,
      mp : 7,
      mapLocation : {
        node : null,
        id : 0
      }
      
    },
    {
      name : "player two",
      character : "Hermione",
      hp : 40,
      mp : 7,
      mapLocation : { 
        node : null, 
        id : 0
      }
    }
  ],
  turn : {
    currentPlayer : null,
    hasMoved : false
  }
}

export let my = {
  viewState : "map"
};

export function init(saveGame, ctx){
  my.saveGame = saveGame || defaultGameData;
  my.gameLoopRunning = true;
  
  map.init(ctx);
  infoBoard.init(my.saveGame);
  
  my.ready = true; // must run last, right before the game loop starts.
  
  window.requestAnimationFrame(gameLoop);
}

function gameLoop(callTime) {
  render();
  update();
  if(my.gameLoopRunning) {
    window.requestAnimationFrame(gameLoop);
  }
}

function currentPlayer() {
  return (
    my.saveGame.players.find( curPlay => curPlay.name === my.saveGame.turn.currentPlayer )
  );
}

function locationState() {
  return currentPlayer().locationState();
}

export function render() {
  map.render();
  infoBoard.render();
}

export function update() {
  map.update();
  infoBoard.update();
}
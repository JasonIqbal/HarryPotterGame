// Jason & Rowan 2022 Global Game Jam

import * as map from "./map.js";

// Model
let defaultGameData = {
  players : [
    {
      name : "player one",
      character : "Harry",
      hp : 40,
      mp : 7,
      mapLocation : {
        path : 0,
        steps : 0
      }
      
    },
    {
      name : "player two",
      character : "Hermione",
      hp : 40,
      mp : 7,
      mapLocation : { 
        path : 0, 
        steps : 0
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
  

  my.ready = true; // must run last, right before the game loop starts.
  
  
//  let i = 100;
//  let gameLoopFunction = async function () {
//    while(my.gameLoopRunning && i > 0) {
//      render();
//      update();
//      i--;
//    }
//  }()
  
}

export function render() {
  map.render();
}

export function update() {
  map.update();
}
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

export function init(saveGame){
  my.saveGame = saveGame || defaultGameData;
  my.gameLoopRunning = true;
  
  map.init();
  
//  let gameLoopFunction = async function () {
//    while(my.gameLoopRunning) {
//      render();
//      update();
//    }
//  }()
  
}

export function render() {
  map.render();
}

export function update() {
  map.update();
}
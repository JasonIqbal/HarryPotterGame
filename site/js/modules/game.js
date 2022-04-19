// Jason & Rowan 2022 Global Game Jam

import * as map from "./map.js";
import * as infoBoard from "./infoBoard.js";
import * as characterView from "./characterView.js";
import * as NodeMapManager from "./nodeMap.js";

// side note. make sure two players do not enter the same name.

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
    currentPlayerIndex : 0,
    hasMoved : false
  }
}

export let my = {
  viewState : "map",
  nodeMap : null
};

function loadMapNodeIntoPlayers() {
  my.saveGame.players.forEach((person) => {
    if(!person.mapLocation.node) {      
      if(person.mapLocation.id < my.nodeMap.length && person.mapLocation.id >= 0) {
        person.mapLocation.node = my.nodeMap[person.mapLocation.id];
      }
      else {
        person.mapLocation.id = 0;
        person.mapLocation.node = my.nodeMap[0];
      }
    }
  });
};

export function init(saveGame, ctx){
  my.saveGame = saveGame || defaultGameData;
  my.nodeMap = NodeMapManager.getNodeMap();
  loadMapNodeIntoPlayers();
  my.gameLoopRunning = true;
  
  map.init(ctx);
  infoBoard.init(my.saveGame, my.nodeMap, currentPlayer);
  characterView.init(my.saveGame);
  
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
  return my.saveGame.players[my.saveGame.turn.currentPlayerIndex];
}

function locationState() {
  let locNode = currentPlayer().mapLocation.node;
  let locState = null;
  
  // Default to "Map" location state
  if (locNode) {
    locState = locNode.locationState();
  }
  else {
    locState = "Map";
  }
  
  return locState;
}

export function render() {
  switch (locationState()) {
    case "Map" :
      map.render();
      break;
    case "Forest" :
      break;
  }
 
  infoBoard.render();
  characterView.render(locationState());
}

export function update() {
  switch (locationState()) {
    case "Map" :
      map.update();
      break;
    case "Forest" :
      break;
  }
  
  infoBoard.update();
  characterView.update();
}
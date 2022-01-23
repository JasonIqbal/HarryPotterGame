// Jason & Rowan 2022 Global Game Jam

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

export let my = {};

export function init(saveGame){
  my.saveGame = saveGame || defaultGameData;
  my.gameLoopRunning = true;
  
  let gameLoopFunction = async function () {
    while(my.gameLoopRunning) {
      render();
      update();
    }
  }()
  
}

export function render() {
  my.renderCount = my.renderCount || 0;
  
  if (my.renderCount < 5) {
    console.log("render: " + my.renderCount + "\n");
    my.renderCount++;
  }
  else {
    my.gameLoopRunning = false;
  }
}

export function update() {
  
}
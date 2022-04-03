//Copywrite Jason Iqbal 2021
export let my = {};

export function init(saveGame){
  my.saveGame = saveGame;
  
}

function drawCharacter(character, node) {
  switch (character) {
    case "Harry" : 
      break;
    case "Hermione" :
      break;
    case "Ron" :
      break;
    default:
      console.log("character type error on draw\n");
  }
  
}

export function render(currentLocation) {
  my.saveGame.players.filter( plr => plr.mapLocation.node.mapName === currentLocation).forEach( (player) => {
    drawCharacter(player.character, player.mapLocation.node);
  });
}

export function update() {
  
}

export function deconstruct() {
  
}
//Copywrite Jason Iqbal 2021
export let my = {};

export function init(saveGame){
  my.saveGame = saveGame;

  my.harryImg = new Image();
  my.hermioneImg = new Image();
  my.ronImg = new Image();
  
  my.harryImg.src = "../../images/harry.png";
  my.hermioneImg.src = "../../images/hermione.png";
  my.ronImg.src = "../../images/ron.png";
  
  my.ready = 0;
  my.harryImg.addEventListener('load', ()=>{setReady("Harry")}, {once : true});
  my.hermioneImg.addEventListener('load', ()=>{setReady("Hermione")}, {once : true});
  my.ronImg.addEventListener('load', ()=>{setReady("Ron")}, {once : true});
}

// fun with bit flags
export function setReady(name) {
  switch (name) {
    case "Harry" :
      my.ready += 1;
      break;
    case "Hermione" :
      my.ready += 2;
      break;
    case "Ron" :
      my.ready += 4;
      break;
  }
  
  render();
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
  if(my.ready === 7) {
    my.saveGame.players.filter( plr => plr.mapLocation.node.mapName === currentLocation).forEach( (player) => {
      drawCharacter(player.character, player.mapLocation.node);
    });
  }
}

export function update() {
  
}

export function deconstruct() {
  
}
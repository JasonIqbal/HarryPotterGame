//Copywrite Jason Iqbal 2021
export let my = {};

export const Harry = 1;
export const Hermione = 2;
export const Ron = 4;

export function init(saveGame, ctx){
  my.saveGame = saveGame;
  my.ctx = ctx;
  my.harryImg = new Image();
  my.hermioneImg = new Image();
  my.ronImg = new Image();
  
  my.harryImg.src = "../../images/harry.png";
//  my.hermioneImg.src = "../../images/hermione.png";
//  my.ronImg.src = "../../images/ron.png";
  
  my.ready = 0;
  my.harryImg.addEventListener('load', ()=>{setReady(Harry)}, {once : true});
  my.hermioneImg.addEventListener('load', ()=>{setReady(Hermione)}, {once : true});
  my.ronImg.addEventListener('load', ()=>{setReady(Ron)}, {once : true});
}

// fun with bit flags
export function setReady(name) {
  switch (name) {
    case Harry :
      my.ready |= Harry;
      break;
    case Hermione :
      my.ready |= Hermione;
      break;
    case Ron :
      my.ready |= Ron;
      break;
  }
  
  render();
}

function drawCharacter(character, node) {
  switch (character) {
    case "Harry" :
      my.ctx.drawImage(my.harryImg, node.mapPosition.x - my.harryImg.width / 2, node.mapPosition.y - my.harryImg.height / 2);
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
  if(my.ready === Harry | Hermione | Ron) {
    my.saveGame.players.filter( plr => plr.mapLocation.node.mapName === currentLocation).forEach( (player) => {
      drawCharacter(player.character, player.mapLocation.node);
    });
  }
}

export function update() {
  
}

export function deconstruct() {
  
}
// Jason & Rowan Global Game Jam

export let my = {
  mouseLocation : {
    x : 0,
    y : 0
  }
};

export function init() {
  my.gameCanvas = document.getElementById('gameCanvas');
  
  // my.gameCanvas.width;
  // my.gameCanvas.height;
  
  document.addEventListener('mousemove', setCoord);
  
}

export function setCoord(event) {
  
//  if(event.target.  div is canvas...) {
  console.log(event.clientX + "\n");
  my.mouseLocation.x = event.clientX;
  my.mouseLocation.y = event.clientY;
//  }

}

export function getCoord() {
  return my.mouseLocation;
}
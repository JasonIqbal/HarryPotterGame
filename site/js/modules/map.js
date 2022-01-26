export let my = {};

export function init(){
  my.gameCanvas = document.getElementById('gameCanvas');
  my.gameCanvas.width = 3300;
  my.gameCanvas.height = 2550;
  
  my.ctx = gameCanvas.getContext('2d');
  
  my.original = new Image();
  my.original.src = "../../images/bigMap.png";
  
  
  
  my.original.addEventListener('load', setReady, {once : true} );
  
}

function setReady(event) {
  my.original.ready = true;
  my.ctx.drawImage(my.original, 0, 0);
}

export function render() {
  if(my.original.ready) {
    console.log("ready");
    my.original.ready = false;
  }
}

export function update() {
  
}

export function deconstruct() {
  
}
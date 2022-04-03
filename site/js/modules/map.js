// Jason & Rowan 2022 Global Game Jam 

export let my = {
  originalReady : false
};

let mapSize = {
  width : 3300,
  height : 2550
};

export function init(ctx){
  
  my.ctx = ctx;
  
  my.original = new Image();
  my.original.src = "../../images/bigMap.png";
  
  my.original.addEventListener('load', setReady, {once : true} );
}


export function setReady(event) {
  my.originalReady = true;
  render();
}

export function render() {
  if(my.originalReady) {
    my.ctx.drawImage(my.original, 0, 0);
  }
}

export function update() {

}

export function deconstruct() {
  
}
// Jason & Rowan 2022 Global Game Jam 

import * as game from "./modules/game.js";

function init() {
  console.log("hello");
  
  let gameCanvas = document.getElementById('gameCanvas');
  let controlPanel = document.getElementById('controlPanel');
  let scaleFactor = { x : 1, y : 1 };
  let mapSize = { width : 3300, height : 2550 };
  
  gameCanvas.width = window.innerWidth - controlPanel.clientWidth;
  gameCanvas.height = window.innerHeight;
  let ctx = gameCanvas.getContext('2d');
  
  scaleFactor.x = gameCanvas.width / mapSize.width;
  scaleFactor.y = scaleFactor.x;
  
  ctx.scale(scaleFactor.x, scaleFactor.y);  
  
  window.addEventListener('resize', onWindowResize);
  
  // this is the last running line of code, unless the game loop runs async or 
  // the game loop ends.
  game.init(null, ctx);
  
  function onWindowResize() {
    console.log("resize");
    // make sure scope is proper

    ctx.scale( 1 / scaleFactor.x, 1 / scaleFactor.y );
    
    gameCanvas.width = window.innerWidth - controlPanel.clientWidth;
    gameCanvas.height = window.innerHeight;
    
    scaleFactor.x = gameCanvas.width / mapSize.width;
    scaleFactor.y = scaleFactor.x;
  
    ctx.scale(scaleFactor.x, scaleFactor.y); 
    
    if (game.my.ready) {
      game.render();
    }
    
  }
}
init();
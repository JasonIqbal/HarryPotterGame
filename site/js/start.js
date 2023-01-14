// Jason & Rowan 2022 Global Game Jam 

import * as game from "./modules/game.js";

function init() {
//  console.log("hello");
  
  let gameCanvas = document.getElementById('gameCanvas');
  let controlPanel = document.getElementById('controlPanel');
  let gameTitle = document.getElementById('captionTitle');
  let gameBody = document.getElementsByTagName("body").item(0);
  let gameRoot = document.getElementById('gameRoot');
  let mapSize = { width : 3300, height : 2550 };
  let scaleFactor = { x : 1, y : 1 };
  
  gameCanvas.width = gameRoot.clientWidth - controlPanel.clientWidth - 16 - 4;
  // - body margin x2 - table data padding x2 - second table data padding x2;  
  gameCanvas.height = gameRoot.clientHeight - 16 - gameTitle.clientHeight - 4 - 2;
  // - body margin x2 - caption title height - caption margin x2 - table data padding x2 
  
  let ctx = gameCanvas.getContext('2d');
  scaleFactor = getScaleFactor();
  ctx.scale(scaleFactor.x, scaleFactor.y);  
  
  window.addEventListener('resize', onWindowResize);
  
  // this is the last running line of code, unless the game loop runs async or 
  // the game loop ends.
  game.init(null, ctx);
  
  function onWindowResize() {
//    console.log("resize");
    // make sure scope is proper
    
    gameCanvas.width = gameRoot.clientWidth - controlPanel.clientWidth - 16 - 4; 
    // - body margin x2 - table data padding x2 - second table data padding x2;
    gameCanvas.height = gameRoot.clientHeight - 16 - gameTitle.clientHeight - 4 - 2;
    // - body margin x2 - caption title height - caption margin x2 - table data padding x2 
    
    scaleFactor = getScaleFactor();
    ctx.scale(scaleFactor.x, scaleFactor.y); 
    
    if (game.my.ready) {
      game.render();
    }
  }
  
  function getScaleFactor() {
    let factor;
    let wFactor = gameCanvas.width / mapSize.width;
    let hFactor = gameCanvas.height / mapSize.height;
    
    factor = (wFactor <= hFactor)? wFactor : hFactor;

    return {
      x : factor,
      y : factor
    }
  }
  
}
init();
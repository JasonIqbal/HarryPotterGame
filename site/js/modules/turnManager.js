// Jason & Rowan, Global Game Jam
import * as mouse from "./mouse2d.js"

export let my = {
//  mouse location
  mouseLocation : null
}

export const CircleRadius = 25;


export function init(saveGame, nodeMap, currentPlayer, ctx) {
  my.ctx = ctx;
  my.currentPlayer = currentPlayer;

  //?? initialize controls ??
  //   
  mouse.init();
}

function drawCircle(centerPoint, color) {
  
  ctx.save();
  ctx.lineWidth = 5;
  ctx.fillStyle = "transparent";
  
  switch (color) {
    case "red" :
      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.arc(centerPoint.x, centerPoint.y, CircleRadius, 0, 2 * Math.PI);
      ctx.stroke();
      break;
    case "green" :
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.arc(centerPoint.x, centerPoint.y, CircleRadius, 0, 2 * Math.PI);
      ctx.stroke();
      break;
    default :
      console.log("color not implemented for function drawCircle of turnManager.");
  }
  
  ctx.restore();
}


export function render() {

}

export function update() {
  // for each connected node, if the node is in current location state, check mouse distance, and if next to it draw red drawCircle, if not next to it draw green circle.
  
  my.currentPlayer().mapLocation.node.connectedNodes.forEach((cNode)=> {
    if(cNode.mapName === my.currentPlayer().mapLocation.node.mapName) {
      // if mouse is near draw a red circle
      drawCircle(cNode.mapPosition, "red");
      // if mouse is not near draw a green circle
      // drawCircle(cNode.mapPosition, "green");
      
      
    }
    else {
      // Make clickable text dialog box/button next to player. something like "enter forest?" generic "enter ___ ?" 
    }
  });
}

export function deconstruct() {
  
}
//Copywrite Jason Iqbal 2022
import Player from "../classes/player.js";

export let my = {};

export function init(saveGame){
  my.players = [];
  
  saveGame.players.forEach((person, order) => {
    my.players.push(new Player(order, person));
  });
}

export function update() {
  
}

export function render() {
  
}

export function deconstruct() {
  
}
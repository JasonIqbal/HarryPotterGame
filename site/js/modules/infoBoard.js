//Copywrite Jason Iqbal 2022
import Player from "../classes/player.js";

export let my = {};

export function init(saveGame, NodeMap, currentPlayer){
  my.players = [];
  
  saveGame.players.forEach((person, order) => {
    my.players.push(new Player(order, person));
  });
}

export function update() {
  my.players.forEach((person) => {
    person.update();
  });
  
}

export function render() {
  my.players.forEach((person) => {
    person.render();
  });
  
}

export function deconstruct() {
  my.players.forEach((person) => {
    person.deconstruct();
  });
}
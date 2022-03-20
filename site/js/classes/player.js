export default class Player {
  elf;
  htmlElement;
  
  constructor(drawOrder, person) {
    let root;
    let tableRow;
    let tableData;
    
    this.elf = person;
    root = document.getElementById('playerSpace');
    tableRow = document.createElement('tr');
    tableData = document.createElement('td');
    
    tableRow.append(tableData);
    root.append(tableRow);
    this.htmlElement = tableData;
  }
  
  update() {
    let name, character, hp, mp, infoBlock;
    
    name = document.createElement('p');
    character = document.createElement('p');
    hp = document.createElement('p');
    mp = document.createElement('p');
    
    name.textContent = this.elf.name;
    character.textContent = "Character: " + this.elf.character;
    hp.textContent = "HP: " + this.elf.hp;
    mp.textContent = "MP: " + this.elf.mp;
    
    infoBlock = name.outerHTML + character.outerHTML + hp.outerHTML + mp.outerHTML;
    this.htmlElement.innerHTML = infoBlock;
  }
  
  render() {
    
  }
  
  deconstruct() {
    
  }
}
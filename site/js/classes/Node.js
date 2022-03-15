export default class Node {
  connectedNodes = [];
    // linked paths of travel
  id = null;
    // identifier for exact node
  actions = [];
    // possible things to do on location (some consumeing turn, others not)
  mapPosition = { x: null, y: null};
    // draw location for charactor
  mapName = null; 
    // eg Map, Forest, Lake, ect...
  
  constructor(nId) {
    this.id = nId;
    
  }
  
  addNodes(arrayOfNodes) {
    this.connectedNodes.push(...arrayOfNodes);
  }
  
  addNode(singleNode) {
    this.connectedNodes.push(singleNode);
  }
  
  locationState() {
    return this.mapName;
  }
}
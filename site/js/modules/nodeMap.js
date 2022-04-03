//import * as nodeMapData from "../data/nodeMapData.json";
import NodeMap from "../data/oldNodeMap.js";
import Node from "../classes/Node.js";

export function getNodeMap() {
  let loadedMap = [];
  
  NodeMap.forEach( node => loadedMap.push(new Node(node)) );
  
  return loadedMap;
};
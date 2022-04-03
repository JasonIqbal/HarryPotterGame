const NodeMap = [
  {
    connectedNodes : [1],
    id : 0,
    actions : ["move"],
    mapPosition : { x : 85, y : 1741},
    mapName : "Map"
  },
  {
    connectedNodes : [2,0],
    id : 1,
    actions : ["move"],
    mapPosition : { x : 357, y : 1700},
    mapName : "Map"
  },
  {
    connectedNodes : [1,3,4],
    id : 2,
    actions : ["move"],
    mapPosition : { x : 520, y : 1708},
    mapName : "Map"
  },
  {
    connectedNodes : [2],
    id : 3,
    actions : ["move"],
    mapPosition : { x : 634, y : 1431},
    mapName : "Map"
  },
  {
    connectedNodes : [2],
    id : 4,
    actions : ["move"],
    mapPosition : { x : 675, y : 1960},
    mapName : "Map"
  },
  {
    connectedNodes : [4,6],
    id : 5,
    actions : ["move"],
    mapPosition : { x : 900, y : 2176}, // position on mapName "Map", Forest position x:91, y:947
    mapName : "Forest"
  },
  {
    connectedNodes : [5],
    id : 6,
    actions : ["move"],
    mapPosition : { x : 386, y : 1007},
    mapName : "Forest"
  }
];

export default NodeMap;
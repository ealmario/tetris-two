// Configurations and rules of the game

// Board Size
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

// Keys
const KEY = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  UP: 38,
  SPACE: 32,
}

Object.freeze(KEY);

// Colors
const COLORS = [
  '#a3eded', //cyan
  '#4f85da', //blue
  '#e7b24e', //orange
  '#f0f068', //yellow
  '#4faf59', //green
  '#9e519e', //purple
  '#991d1d' //red
];

// Shapes
const SHAPES = [
  [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]
  ],
  [
    [2,0,0],
    [2,2,2],
    [0,0,0]
  ],
  [
    [0,0,3],
    [3,3,3],
    [0,0,0]
  ],
  [
    [0,4,4,0],
    [0,4,4,0],
    [0,4,4,0],
    [0,0,0,0],
  ],
  [
    [0,5,5],
    [5,5,0],
    [0,0,0]
  ],
  [
    [0,6,0],
    [6,6,6],
    [0,0,0]
  ],
  [
    [7,7,0],
    [0,7,7],
    [0,0,0]
  ]
]
// Initialize the game and overall game logic
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate the size of the canvas from constants.js
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  
  board.piece = piece;
}

// Moves
const moves = {
  [KEY.LEFT]: p => ({...p, x: p.x - 1}),
  [KEY.RIGHT]: p => ({...p, x: p.x + 1}),
  [KEY.DOWN]: p => ({...p, y: p.y + 1}),
  [KEY.SPACE]: p => ({...p, y: p.y + 1})
}

// const p = this.moves[event.key](this.piece);

// Keydown Events
document.addEventListener('keydown', event => {
  if (moves[event.keyCode]) {
    event.preventDefault();

    // Get new state
    let p = moves[event.keyCode](board.piece);
    if (event.keyCode === KEY.SPACE) {
      // Hard drop
      while (board.valid(p)) {
        board.piece.move(p);
        p = moves[KEY.DOWN](board.piece);
      }      
    } else if (board.valid(p)) {
      board.piece.move(p);
    }

    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    board.piece.draw();
  }
})
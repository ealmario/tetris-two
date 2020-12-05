// Board logic; keeps track of the tetromino on the board
class Board {
  // Reset the board when we start a new game
  reset() {
    this.grid = this.getEmptyBoard();
  }

  // Get a matrix filled with zeros
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}
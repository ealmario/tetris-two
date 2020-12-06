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

  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y <= ROWS
  }

  notOccupied(x,y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  // Check if the validitiy of position
  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;

        return (value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y)));
      });
    });
  }
}
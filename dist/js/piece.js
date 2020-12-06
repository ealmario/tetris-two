// Piece logic
class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
      [2,0,0],
      [2,2,2],
      [0,0,0]
    ]

    // Starting position
    // Left upper position of the shape
    this.x = 4;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value,x) => {
        // this.x, this.y gives the upper position of the shape
        // x, y gives the position of the block in the shape
        // this.x + x is then the position of the block on the board

        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      })
    });
  }

  move(p) {
    this.x = p.x;
    this.y = p.y;
  }
}
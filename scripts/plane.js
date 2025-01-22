class Plane {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(0, 0);

    this.width = 80;
    this.height = 40;

    this.movementSpeed = 600;

    // Left, Up, Right, Down
    this.movement = [false, false, false, false];
  }

  moveLeft(state) {
    this.movement[0] = state;
  }

  moveUp(state) {
    this.movement[1] = state;
  }

  moveRight(state) {
    this.movement[2] = state;
  }

  moveDown(state) {
    this.movement[3] = state;
  }

  updateMovement() {
    if (this.movement[0]) this.velocity.x = -1;
    if (this.movement[1]) this.velocity.y = -1;
    if (this.movement[2]) this.velocity.x = 1;
    if (this.movement[3]) this.velocity.y = 1;

    console.log(this.movement);
  }

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  draw(context) {
    context.save();

    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    context.restore();
  }

  update(deltaTime) {
    this.updateMovement();

    this.position = this.position.add(
      this.velocity.mult(deltaTime).mult(this.movementSpeed)
    );

    this.velocity.x = 0;
    this.velocity.y = 0;
  }
}

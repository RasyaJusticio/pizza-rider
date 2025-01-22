class Bullet {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(1, 0);

    this.movementSpeed = 700;

    this.width = 20;
    this.height = 10;
  }

  isOutOfBounds() {
    return this.position.x > WIDTH;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  draw(context) {
    context.save();

    context.fillStyle = "rgb(255, 217, 0)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);

    context.restore();
  }

  update(deltaTime) {
    this.position = this.position.add(
      this.velocity.mult(deltaTime).mult(this.movementSpeed)
    );
  }
}

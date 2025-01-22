class Pizza {
  constructor(x, y, type) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(-1, 0);

    this.movementSpeed = 250;

    this.type = type; // 1, 2, 3, 4
    this.radius = 60;
    this.health = 1;

    this.init();
  }

  init() {
    switch (this.type) {
      case 2:
        this.health = 10;
        break;
      case 3:
        this.radius = 80;
        this.health = 30;
        break;
      case 4:
        this.radius = 110;
        this.health = 100;
        break;
      default:
        this.health = 1;
        break;
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  draw(context) {
    context.save();

    context.fillStyle = "rgb(225, 140, 20)";
    if (this.type !== 1) {
      context.beginPath();

      context.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2
      );

      context.closePath();
    }
    context.fill();

    context.restore();
  }

  update(deltaTime) {
    this.position = this.position.add(
      this.velocity.mult(deltaTime).mult(this.movementSpeed)
    );
  }
}

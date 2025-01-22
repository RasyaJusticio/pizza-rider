class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  sub(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  mult(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }
}

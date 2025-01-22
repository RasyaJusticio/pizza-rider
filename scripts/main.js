/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

// Variables
let lastTimestamp = 0;
let lastBulletSpawn = 0;

// Objects
const plane = new Plane(15, HEIGHT / 2 - 20);
const pizzas = [new Pizza(WIDTH / 2, HEIGHT / 2, 3)];
const bullets = [];

// Util Functions
function spawnBullet() {
  const bullet = new Bullet(
    plane.position.x + plane.width,
    plane.position.y + plane.height / 2
  );

  bullets.push(bullet);
}

// Draw Functions
function drawPizzas() {
  pizzas.forEach((pizza) => {
    pizza.draw(context);
  });
}

function drawBullets() {
  bullets.forEach((bullet) => {
    bullet.draw(context);
  });
}

// Update Functions
function updatePizzas(deltaTime) {
  pizzas.forEach((pizza) => {
    pizza.update(deltaTime);
  });
}

function updateBullets(deltaTime) {
  lastBulletSpawn += deltaTime;
  if (lastBulletSpawn >= FIRERATE) {
    lastBulletSpawn = 0;
    spawnBullet();
  }

  bullets.forEach((bullet, index) => {
    if (bullet.isOutOfBounds()) {
      bullets.splice(index, 1);
    } else {
      bullet.update(deltaTime);
    }
  });
}

// Events
document.addEventListener("keydown", (ev) => {
  if (ev.key === "w") {
    plane.moveUp(true);
  } else if (ev.key === "a") {
    plane.moveLeft(true);
  } else if (ev.key === "s") {
    plane.moveDown(true);
  } else if (ev.key === "d") {
    plane.moveRight(true);
  }
});

document.addEventListener("keyup", (ev) => {
  if (ev.key === "w") {
    plane.moveUp(false);
  } else if (ev.key === "a") {
    plane.moveLeft(false);
  } else if (ev.key === "s") {
    plane.moveDown(false);
  } else if (ev.key === "d") {
    plane.moveRight(false);
  }
});

// Main
function draw() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  drawPizzas();
  drawBullets();
  plane.draw(context);
}

function update(deltaTime) {
  updateBullets(deltaTime);
  plane.update(deltaTime);
  updatePizzas(deltaTime);
}

function loop(timestamp) {
  const deltaTime = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  update(deltaTime);
  draw();

  requestAnimationFrame(loop);
}

function init() {
  loop(0);
}

init();

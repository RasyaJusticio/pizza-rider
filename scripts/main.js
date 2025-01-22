/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Constants
const WIDTH = (canvas.width = 1280);
const HEIGHT = (canvas.height = 600);

// Variables
let lastTimestamp = 0;

// Objects
const plane = new Plane(15, HEIGHT / 2 - 20);

// Draw Functions

// Update Functions

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

  plane.draw(context);
}

function update(deltaTime) {
  plane.update(deltaTime);
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

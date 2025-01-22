/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Constants
const WIDTH = (canvas.width = 1280);
const HEIGHT = (canvas.height = 600);

// Variables
let lastTimestamp = 0;

// Draw Functions

// Update Functions

// Main
function draw() {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

function update(deltaTime) {}

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

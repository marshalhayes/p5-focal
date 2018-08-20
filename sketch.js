// Your fancy p5.js sketch goes here

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('#sketch');
}

function draw() {
  background('#ff5d73');
  textSize(16);
  text('your fancy p5.js sketch goes here', 15, 45);
}

function windowResized() {
  resizeCanvas(windowWidth, height);
}

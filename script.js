let x = 0;
let y = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
background(255);
fill(0);
noStroke();
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
ellipse(x, y, 40, 40);
}

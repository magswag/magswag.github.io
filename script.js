function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
background(255);
fill(0);
noStroke();
  let x = lerp(x, mouseX, 0.1);
  let y = lerp(y, mouseY, 0.1);
ellipse(x, y, 40, 40);
}

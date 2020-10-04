let angle = 0;
function setup() {
createCanvas(400,400,WEBGL);
}
function draw() {
background(0);
normalMaterial();
rotateZ(angle);
rotateY(angle * 0.03);
box()
angle += 0.02;
}
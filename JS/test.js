function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  fill('red')
  ellipse(225,225,300);
  fill('dodgerblue')
  rect(125,125,200,200);
  fill('yellow');
  rect(150,150,150,150)
  fill('walter');
  rect(175,175,100,100);
  fill('purple');
  rect(200,200,50,50);
  fill('black');
  ellipse(225,225,50);
}
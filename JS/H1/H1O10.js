var diameter = 10;



function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  background('lavender');
  //noLoop();
   
}

function draw() {
  fill('wheat');
  rect(0,0,width,30);
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY,diameter);
  diameter +=1;
}

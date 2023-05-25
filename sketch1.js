function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //head
  stroke(0,0,0)
  fill(210, 150, 70)
  rect(120,100,160,255)
  
  
  //eyes
  fill(250, 235, 100)
  ellipse(160,160,40,40)
  ellipse(240,160,40,40)
  
  fill(43, 39, 1)
  ellipse(160,160,10,20)
  ellipse(240,160,10,20)
  
  fill(255,255,255)
  ellipse(155,160,5,10)
  ellipse(235,160,5,10)
  
  
  
  //nose
  stroke(0,0,0)
  fill(0,0,0)
  triangle(155,190,250,190,200,240)
  
  //mouth
  stroke(0,0,0)
  fill(0,0,0)
  line(200,230,200,255)
  line(160,260,200,255)
  line(200,255,220,290)
 
  stroke(0,0,0)
  fill(144, 89, 22)
  ellipse(270,130,40,90)
  ellipse(130,130,40,90)
}
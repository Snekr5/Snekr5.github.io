function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(200)

  if (mouseX > 0 && mouseX <= 100) {
     background(130,130,230);
  }
  if (mouseX > 100 && mouseX <= 200) {
     background(230,130,130);
  }
   if (mouseX > 200 && mouseX <= 300) {
     background(130,230,130);
  }
   if (mouseX > 300 && mouseX <= 400) {
     background(150,100,140);
  }
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    text('I', mouseX, mouseY)
    textSize(40)
    
    
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 0, 0);
    text('Feel', mouseX, mouseY)
    textSize(40)
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 200, 20);
        text('Great', mouseX, mouseY)
    textSize(40)
  }
  
  else if (mouseX > 300 && mouseX <= 400) {
    fill(200, 100, 200);
        text('Today', mouseX, mouseY)
    textSize(40)
  }
  
  
  
  
}








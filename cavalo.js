let cor; // varialvel cor
let PosX
let PosY

function setup() {
  createCanvas(400, 400);
  background("silver");
  cor = color ( random(0,255),random(0,255),random(0,255));

  PosX = 200
  PosY = 200
}

    function draw() {

  circle(PosX,PosY,30);
  fill(cor);
  
  if (mouseX < 200) {
    PosX = PosX-1;
  }
  if (mouseX > 200) {
    PosX = PosX+1;
  }
  if (mouseY < 200) {
    PosY = PosY-1;
  }
  if (mouseY > 200) {
    PosY = PosY+1;
  }
  if(mouseIsPressed) {  
    cor = color ( random(0,255),random(0,255),random(0,255));

  }
}
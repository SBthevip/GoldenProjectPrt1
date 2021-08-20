var fixedRect, movingRect;
function preload (){
img1=loadImage("SpaceImg.jpg")
img2=loadImage("Boss'sMinions!!.gif")
img3=loadImage("EnemySpaceship(BossFight).jpeg")
img4=loadImage("Spaceship(PC).png")
}
function setup() {
  createCanvas(1600,700);
  Player1 = createSprite(750, 350);
  Player1.addImage(img4)
  Player1.scale=0.5;
}

function draw() {
  background(img1);  

drawSprites();
}

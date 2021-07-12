var sea,sea_water
var ship,ship_sailing

function preload(){
ship_sailing=loadAnimation("ship-4.png","ship-3.png","ship-2.png","ship-1.png")
sea_water=loadImage("sea.png")
}

function setup(){
  createCanvas(800,400);

  sea = createSprite(400,165,1,1)
  sea.addImage("sea",sea_water)
  sea.scale=0.3

  ship = createSprite(130,200,30,30)
  ship.addAnimation("ship",ship_sailing)
  ship.scale=0.25
}

function draw() {
  background("black");

  sea.velocityX=-3

  if(sea.x<0){
    sea.x=sea.widdth/8
  }

  drawSprites();
}

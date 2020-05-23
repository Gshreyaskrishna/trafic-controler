var car,wall;

var speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(30, 200, 50, 50);
  car.velocityX = speed;

  wall= createSprite(800, 200, 60, width/2);
  wall.shapeColor = (80,80,80)

  deformatian = 0.5*weight*speed*speed/22500;

  d = deformatian 
}

function draw() {
  background(0); 

  if(car.collide(wall)){

    car.velocityX = 0;

  if(d < 100){
    car.shapeColor = "green"
  }

if(d < 180 && d > 100){
    car.shapeColor = "yellow"
  }

  if(d > 180){
    car.shapeColor = "red"
  }

}
  drawSprites();
 
}
Red 
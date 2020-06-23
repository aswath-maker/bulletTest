var bullet,wall;
var speed,weight;
var thickness;



function setup() {
  createCanvas(800,400);
  speed = random(55,99);
  weight = random(400,1500);
  thickness = random(22,83);

wall = createSprite(750,200,20,height/2);
car =  createSprite(40, 200, 60, 10);
wall.shapeColor = "white";
car.shapeColor = "white";
car.velocityX = speed;
}

function draw() {
  background("black");  
  
if(hasCollided(car,wall)){
car.velocityX = 0;
var damage= 0.5* weight * speed * speed/(thickness * thickness * thickness);

if(damage > 10){
wall.shapeColor = color(255,0,0);
}

if(damage < 10){
wall.shapeColor = color(0,255,0);

}


}
 
 
drawSprites();
}
function hasCollided(car,wall){
 carRightEdge=car.x + car.width;
 wallLeftEdge = wall.x;
 if(carRightEdge>=wallLeftEdge){
     return true;
 }
return false;

}
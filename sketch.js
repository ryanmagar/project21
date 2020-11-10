var wall,thisness;
var bullet,speed,weight;
function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  thisness=random(22,83)

bullet = createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.shapeColor= color(255);

wall = createSprite(1200,200,60,thisness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);
  drawSprites();

function hascollided(){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallRightEdge=lwall.x;
  if(bulletRightEdge>=wallRightEdge)
  {
    return true;
  }
    return false;
  if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thisness *thisness *thisness);
  
  if(damage>10);
  {
    wall.shapeColor=color(255,0,0);
  }
}
  if(damage<10)
  {
   wall.shapeColor=color(0,255,0);
  }
  }}

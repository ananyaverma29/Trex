var ball;
function setup() {
  createCanvas(600,600);
  ball = createSprite(300,300,30,30);
  ball.shapeColor="white";
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW))
{
background("red");
}
if(keyIsDown(LEFT_ARROW))
{
background("green");
}
if(keyIsDown(DOWN_ARROW))
{
background("blue");
}
if(keyIsDown(UP_ARROW))
{
background("yellow");
}
drawSprites();
}





var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
// creating ground
  ground = createSprite(300,180,600,20);
  ground.velocityX = -5; 
  ground.addImage("ground",groundImage);
}


function draw(){
  //set background color 
  background("black");
  
  //logging the y position of the trex
  console.log(ground.x);

  //checking ground's x-position
  if(ground.x<0)
  {
    // resetting the ground's x-position
    ground.x=ground.width/2;
  }
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //increasing velocity of Trex to give it a gravity effect
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}
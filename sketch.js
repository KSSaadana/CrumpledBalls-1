
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; 
var ground;
var dustbinwall1, dustbinwall2, dustbinwall3, dustbinwall4;
var lid
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(80,400);
   ground = new Ground(400,475);

   dustbinwall1 = new DustbinWall(590,458,140,10);
   dustbinwall2 = new DustbinWall(520,387,20,150);
   dustbinwall3 = new DustbinWall(660,387,20,150);
   //dustbinwall4 = new DustbinWall(590,37.75,150,10);
  lid = createSprite(600,-37.75,150,10);
  lid.shapeColor = "red";
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();
  //dustbinwall4.display();

  drawSprites();
 
}

function keyPressed(){

  if(lid.y = 420){
    lid.velocityY=0;
  }

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:80,y:-150});
  
  }


}



















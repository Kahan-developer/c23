var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSprite1, boxSprite2, boxSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite1=createSprite(width-350, 630, 20,);
	boxSprite1.shapeColor=color(255,0,0)

	boxSprite2=createSprite(width-550, 630, 20,);
	boxSprite2.shapeColor=color(255,0,0)

	boxSprite3=createSprite(width-450, 670, 200, 20);
	boxSprite3.shapeColor=color(255,0,0)


	engine = Engine.create();
	world = engine.world;
	
	
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:false});
		World.add(world, packageBody);
	
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic( packageBody , false);
  
  }
}


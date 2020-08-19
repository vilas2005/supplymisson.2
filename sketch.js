

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
 var packageBody,ground;
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
	var box1 = createSprite(325,630,10,50);
	var box2 = createSprite(395,630,10,50);
	var box3 = createSprite(360,650,50,10);
	box1Img=loadImage("red")
	box2Img=loadImage("red")
	box3Img=loadImage("red")
	
	

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  
 
}

function keyPressed() {
	
	if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(packageBody,false);
	 }
	  
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//var tree;
//var stone;
//var ground;
var boy,boyImage;

function preload()
{
	tree.loadImage("Plucking mangoes/tree.png");
stone.loadImage("Plucking mangoes/stone.png");
	boyImage.loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.

   boy = createSprite(100,200,40,70);
   boy.addImage(boyImage);

   World.add(world,boy);

	ground = new Ground(600,700,1200,20);
	World.add(world,ground);
	
	tree = new Tree(600,700,120,100);
    tree.addImage("Plucking mangoes/tree.png");
	World.add(world,tree);
	
	sling = new SlingShot(stone.body,{x:200, y:100});

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
ground.display();
tree.display();
boy.display();
stone.display();












  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


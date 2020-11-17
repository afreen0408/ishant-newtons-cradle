var roof,rope1,bobobject1,bobobject2,bobobject3,bobobject4, 
bobobject5,bobobject6,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,100,200,20)
	//World.add(world,roof)

	bobobject1 = new Bob(700,250);
	bobobject2 = new Bob(750,250);
	bobobject3 = new Bob(800,250);
	bobobject4 = new Bob(850,250);
	bobobject5 = new Bob(900,250);
	

	rope1 = new Rope(bobobject1.body,roof.body,-80,0);
	World.add(world,rope1)

	rope2 = new Rope(bobobject2.body,roof.body,-40,0);
    World.add(world,rope2)
   
    rope3 = new Rope(bobobject3.body,roof.body,0,0);
    World.add(world,rope3)

    rope4 = new Rope(bobobject4.body,roof.body,40,0);
	World.add(world,rope4) 
	
	rope5 = new Rope(bobobject5.body,roof.body,+80,0)
	World.add(world,rope5) 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display() 

  bobobject1.display()
  rope1.display()

  bobobject2.display()
  rope2.display()

  bobobject3.display()
  rope3.display()

  bobobject4.display()
  rope4.display()

  bobobject5.display()
  rope5.display()
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-40,y:-45});

	}
}


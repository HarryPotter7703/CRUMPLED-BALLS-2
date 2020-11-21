const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	;
var world, gameState;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	gameState = "ready";

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
	dustbinObj.display();
	if(gameState === "ready"){
		textSize(40);
		fill(255,0,0);
		text("Press the up arrow key", 500, 300);
		text("(A secret work)", 550, 400)
	}
	if(gameState === "play"){
		textSize(40);
		fill(0, 0, 255)
		text("CONGRATULATIONS !🎉🎉🎉", 500, 300);
		text("You cleaned the environment !", 500, 350)
	}
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW && gameState === "ready") {
			gameState = "play"
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:123,y:-155});

    
  	}
}






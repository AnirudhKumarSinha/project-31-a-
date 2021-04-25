//<code>
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var particle=[];


function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  

	ground = Bodies.rectangle(width/2, 800, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    
   

	division1=new Wall(0,650,5,300);

  plinko1=new Ball(40,50)

  plinko2=new Ball1(20,110)
  
  plinko3=new Ball(40,170)

  plinko4=new Ball1(20,230)

  plinko5=new Ball(40,290)

  plinko6=new Ball1(20,350)

  if(frameCount%60===0){
  
    particle.push(particle=new Plinko(random(width/2-20,width/2+20),-10))
  }


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

 // textSize(30)
  //text(mouseX,50,30);
  //text(mouseY,50,70);

  
  
 
  division1.display();

  plinko1.display();
  
  plinko2.display();
  
  plinko3.display();
 
  plinko4.display();
  
  plinko5.display();

  plinko6.display();

 particle.display();

}

  
  

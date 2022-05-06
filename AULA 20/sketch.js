
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine;
var world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  };

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var ground_options = {
    isStatic: true
  };

  ground = Bodies.rectangle(200, 395, 400, 20, ground_options);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("gray");
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 400,20);
  
}


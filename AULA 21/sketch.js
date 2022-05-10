const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var chao;
var teto;
var paresq;
var pardir;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  chao = new Ground(200,390,400,20);
  teto = new Ground(200,10,400,20);
  paresq = new Ground(10,200,20,400);
  pardir = new Ground(390,200,20,400);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  chao.show();
  teto.show();
  pardir.show();
  paresq.show();
}


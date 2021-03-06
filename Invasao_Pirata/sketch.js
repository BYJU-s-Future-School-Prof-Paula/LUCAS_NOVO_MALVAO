const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground;
var backgroundimg;
var tower, towerimg;
var canhao, angulo;
var barco;


var vetorBolas =[];
function preload() {
  backgroundimg = loadImage("./assets/background.gif");
  towerimg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  options = {
    isStatic:true
  }
  
  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world, tower);



  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);

  angleMode(DEGREES)
  angulo = 20

  canhao= new Cannon(180,110,130,100,angulo);

  barco = new Boat(width - 79, height - 60, 170, 170, -80);

  
  
 
}

function draw() {
  background(189);
  Engine.update(engine);

  image(backgroundimg,0,0,1200,600);
 
  rect(ground.position.x, ground.position.y,width*2,1);

  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x, tower.position.y, 160,310);
  pop();

  for (var i=0; i<vetorBolas.length; i++){
    cannonBallShow(vetorBolas[i], i);
  }

  canhao.show();
  
  Body.setVelocity(barco.body,{x: -1, y: 0});
  barco.show();
  
  
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    vetorBolas[vetorBolas.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var bolaDeCanhao;
    bolaDeCanhao= new CannonBall(canhao.x+5, canhao.y+2);
    vetorBolas.push(bolaDeCanhao);
  }
}

function cannonBallShow(bola,indice){
  if(bola){
    bola.show();
  }

} 

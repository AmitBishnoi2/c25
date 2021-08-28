const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var arc;
var tower;
var canon
var ball1;
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  arc=loadImage("assets/cannon_base.png")
}
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(94, 600, 200, 380);
  canon = new Cannon(100,300,100,180,-PI/4)
   ball1 = new Cannonball (100,300,40)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
 
  
  
  background(backgroundImg);
  image(arc,-40,180,300,300)
  Engine.update(engine);
    tower.display();
   canon.display();
    ball1.display();
}

function keyReleased(){
if(keyCode===DOWN_ARROW){
ball1.shoot()



}



}
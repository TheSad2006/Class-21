const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  btn1 = createImg('push.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  btn2 = createImg('push.png');
  btn2.position(150,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  
  }

  ground =new Rectangle(200,390,400,20);
  left = new Rectangle(10,200,20,400);
  top_wall = new Rectangle(200,10,400,20);
  right = new Rectangle(390,200,20,400);
  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add( world,ball); 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  left.show(); 
  right.show(); 
  top_wall.show(); 

  ellipse(ball.position.x,ball.position.y,20);
}

function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0.02});
}


function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
}
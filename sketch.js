const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(displayWidth,displayHeight-200);
 engine=Engine.create();
 world=engine.world();

}

function draw() {
background(255,255,255);  
// var hero=hero.js

//if(keyDown leftArrow)
//{hero.pos=hero.pos+10}


Engine.update(engine);









  drawSprites();
}
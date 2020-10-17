const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld; 

var ground;
var box1  
var box2;
var ball; 
var ball2; 
function setup() {
  createCanvas(400,400);
myengine = Engine.create() ; // myengine.world 
myworld = myengine.world;
box1 = new Box(200,200,50,50); 
box2 = new Box(210,150,50,70); 
ground = new Ground(200,380,400,20)
}

function draw() {
  background("black");  
  Engine.update(myengine)
 box1.display();
box2.display(); 
ground.display();


}
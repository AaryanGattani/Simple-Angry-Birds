const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground,pig1,pig2,bird;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(720,320,70,70);
    box2 = new Box(900,320,70,70);
    pig1= new ENEMY(810,350);
    log1= new LOG(810,260,250,PI/2);

    box3 = new Box(720,250,70,70);
    box4 = new Box(900,250,70,70);
    pig2 = new ENEMY(810,250);
    log2 = new LOG(810,190,250,PI/2);

    box5 = new Box(810,170,70,70);
    log3 = new LOG(770,130,170,PI/6);
    log4 = new LOG(850,130,170,-(PI/6));

    bird = new BIRD(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    
    box1.display();
    box2.display();   
    pig1.display();
    log1.display();

    box3.display();
    box4.display();   
    pig2.display();
    log2.display();
    
    box5.display();
    log3.display();
    log4.display();

    bird.display();

}
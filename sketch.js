const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var ninja, ninja_running, thunder
var bg, train, trainImg
var drops=[]

function preload(){
ninja_running = loadAnimation('Images/n1.png','Images/n2.png','Images/n3.png','Images/n4.png','Images/n5.png','Images/n6.png')
thunder= loadAnimation('Images/thunderbolt/1.png','Images/thunderbolt/2.png','Images/thunderbolt/3.png','Images/thunderbolt/4.png')
bg=loadImage('Images/bg.png')
trainImg=loadImage('Images/trainside.png')
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
    ninja=createSprite(displayWidth/2-200,displayHeight/2,10,10)
    ninja.addAnimation("run", ninja_running)
    train=createSprite(displayWidth/2,displayHeight-200,10,10)
    train.scale=2
    train.addImage(trainImg)
   
    /*if(frameCount%100===0){
        for(var i =0; i<100; i++){
            drops.push(new Drops(random(0,400),random(0,600),5))
        }
    }*/
    
}

function draw(){
    background(bg)
    Engine.update(engine)
    /*for(var i=0;i<100;i++){
        drops[i].display();
        drops[i].update();
    }*/
    
    //spawnThunder();
  drawSprites();
}   

function keyPressed(){
    if(keyIsDown(RIGHT_ARROW)){
        //Matter.Body.setPosition(umbrella.body,{x:umbrella.body.position.x+4, y:umbrella.body.position.y})
        //man.x=man.x+4
    }   
}
function spawnThunder(){
    if(frameCount%50===0){
        var t = createSprite(random(0,400),50,10,10)
        t.addAnimation('lightning',thunder);
        t.lifetime=50
    }
}
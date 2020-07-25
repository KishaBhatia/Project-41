const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var drops=[];
//var drop;
var boyUmbrella;
var maxDrops=70;

function preload(){
    thunder1=loadImage("thunder1.png");
    thunder2=loadImage("thunder2.png");
    thunder3=loadImage("thunder3.png");
    thunder4=loadImage("thunder4.png");
}


function setup(){
    canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    
    for(var a=0;a<maxDrops;a++){
        drops.push(new Drops(random(200,300),random(0,800),5));
    }

    boyUmbrella=new Umbrella(200,700,50);
}

function draw(){
    background(0)
    Engine.update(engine);

    Thunder();

    for(var i=0;i<maxDrops;i++){
        drops[i].update();
        drops[i].display();
    }

    boyUmbrella.display();
    drawSprites();
} 

function Thunder(){
    if(frameCount%100===0){
        var thunder=createSprite(300,100);

        var rand=Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
                    thunder.scale=0.5;
                    thunder.lifetime=20;
            break;
            case 2: thunder.addImage(thunder2);
                    thunder.scale=0.5;
                    thunder.lifetime=20;
            break;
            case 3: thunder.addImage(thunder3);
                    thunder.scale=0.5;
                    thunder.lifetime=20;
            break;
            case 4: thunder.addImage(thunder4);
                    thunder.scale=0.5;
                    thunder.lifetime=20;
            break;
        }
    }
    
}
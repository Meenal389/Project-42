const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder,t1,t2,t3,t4;
var drops=[]
var thunderframe=0;
var man,mi;

function preload(){
 t1=loadImage("1.png")
 t2=loadImage("2.png")
 t3=loadImage("3.png")
 t4=loadImage("4.png")
 mi=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
   createCanvas(600,displayHeight)
   engine = Engine.create();
   myworld = engine.world;
  u=new Umbrella(310,displayHeight-230,100,50)
 man=createSprite(300,600,40,40)
 man.addAnimation("man",mi)
 man.scale=0.5
}

function draw(){
    background(0)
    Engine.update(engine);
    u.display()

    if (frameCount % 1 === 0) {
        drops.push(new Drops(random(0, 600), 0, 5));
      }
      for (var i = 0; i < drops.length; i++) {
        drops[i].display();
      }
      callthunder()
      drawSprites()
}   

function callthunder(){
  var r=Math.round(random(80,100))
  if(frameCount% 50===0 ){
    thunderframe=frameCount;
    thunder=createSprite(300,100);
    thunder.scale=0.5
    
     var ran=Math.round(random(1,4));
    switch(ran){
   case 1:thunder.addImage(t1);
        break;
   case 2:thunder.addImage(t2);
        break;
   case 3:thunder.addImage(t3);  
        break;
   case 4:thunder.addImage(t4);
        break;
        default:break;
    }
}
if(thunderframe+10===frameCount && thunder){
  thunder.destroy()
}
}

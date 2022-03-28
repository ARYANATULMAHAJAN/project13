var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var redgroup,orangegroup,redapplegroup;
var score=0

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
redapplegroup = createGroup()
orangegroup = createGroup()
redgroup = createGroup()
}

function draw() {
  background(gardenImg);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  


 var select_sprites = Math.round(random(1,3));

  
   
  if (frameCount % 80 ==0) {
     if (select_sprites == 1) {
    createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
      createRed();
    }
   }
  if(redgroup.isTouching(rabbit)||redapplegroup.isTouching(rabbit)||orangegroup.isTouching(rabbit)){
    redgroup.destroyEach()
    redapplegroup.destroyEach()
    orangegroup.destroyEach()
  score=score+1  
  }

   drawSprites();
   fill('red')
   text('SCORE  ' + score ,202,10);
   
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 5;
apple.lifetime = 150;
redapplegroup.add(apple)
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 5;
orangeL.lifetime = 150;
orangegroup.add(orangeL)
}


function createRed() {
  redL = createSprite(random(50, 350),40, 10, 10);
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.velocityY = 4;
  redL.lifetime = 150;
  redgroup.add(redL)
}



function preload(){

  //pre-load images
pathImg = loadImage("path.png");
jaxonImg = loadAnimation("Runner-1.png","Runner-2.png")  
powerImg = loadImage("energyDrink.png")
powerImg1 = loadImage("coin.png")
bombImg = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here


//Moving background 
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4;
path.scale=1.2;

//create image of energy
power = createSprite(80,40)
power.addImage("energyDrink.png" ,powerImg)
power.scale = 0.05
power.velocityY = 02;

//create image of money
power1 = createSprite(190,380)
power1.addImage("coin.png",powerImg1)
power1.scale = 0.15
power1.velocityY = 02;

power2 = createSprite(280,40)
power2.addImage("energyDrink.png" ,powerImg)
power2.scale = 0.05
power2.velocityY = 02;

//create image of money
power3 = createSprite(190,30)
power3.addImage("coin.png",powerImg1)
power3.scale = 0.15
power3.velocityY = 02;

//add Animation of jaxon
jaxon=createSprite(200,340,);
jaxon.addAnimation("Runner-1.png",jaxonImg);
jaxon.scale=0.05;
jaxon.velocityX = 0;

//create invisible path
invisiblePath1 = createSprite(40,180,10,400);
invisiblePath1.visible = false

invisiblePath2= createSprite(370,180,10,400);
invisiblePath2.visible = false
}

function draw() {
  background(0);

  console.log(jaxon.x)
  //Moving the jaxon with mouse along the x-axis
    jaxon.x=World.mouseX;
  
    //Making collide
jaxon.collide(invisiblePath1)
jaxon.collide(invisiblePath2)

  //code to reset the background
  if(path.y > 400 )
  {
    path.y = height/2;
  }

  //code to reset the power with path
  if(power.y > 400 )
  {
    power.y = height/2;
  }

  //code to reset the power1 with path
  if(power1.y > 400 )
  {
    power1.y = height/2;
  }
  //code to reset the power1 with path
  if(power2.y > 400 )
  {
    power2.y = height/2;
  }
  //code to reset the power1 with path
  if(power3.y > 400 )
  {
    power3.y = height/2;
  }
drawSprites();
}

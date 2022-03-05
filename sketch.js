
var bg
var tom, tomimg1, tomimg2, tomimg3;
var jerry, jerry1, jerry2, jerry2;
function preload() {
    //load the images here
    tomimg1=loadAnimation("images/cat1.png")
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomimg3=loadAnimation("images/cat4.png")
    jerry1=loadAnimation("images/mouse1.png")
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3=loadAnimation("images/mouse4.png")
    bg=loadImage("images/garden.png")}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(700,600)
tom.addAnimation("tomsleeping",tomimg1)
tom.scale=0.2
jerry=createSprite(250,600)
jerry.addAnimation("jerrystanding",jerry1)
jerry.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation("tomLastImage",tomimg3)
    tom.x=350
    tom.changeAnimation("tomLastImage")
jerry.addAnimation("jerryLastImage",jerry3)
jerry.changeAnimation("jerryLastImage")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-7
    tom.addAnimation("tomRunning",tomimg2)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerryTeasing",jerry2)
    jerry.changeAnimation("jerryTeasing")

}
}



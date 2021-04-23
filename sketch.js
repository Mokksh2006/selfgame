var p1Bow,p2Bow;
var redGrp,blueGrp,greenGrp,purpleGrp,balloon1Grp,balloon2Grp,balloon3Grp,balloon4Grp,balloon5Grp;
var bombGrp, heartGrp;
var b1Img, b2Img, b3Img, b4Img, b5Img;
var p1score = 0;
var p2score = 0;
var p1lives = 5;
var p2lives = 5;

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 110);
  p1Bow = createSprite(40, displayHeight/2, 50, 50);
  p2Bow = createSprite(displayWidth - 80, displayHeight/2, 50, 50);
  
  balloon1Grp = new Group();
  balloon2Grp = new Group();
  balloon3Grp = new Group();
  balloon4Grp = new Group();
  balloon5Grp = new Group();
  bombGrp = new Group();
  heartGrp = new Group();
  
  b1Img = loadImage ("red.png");
  b2Img = loadImage ("green.png");
  b3Img = loadImage ("yellow.png");
  b4Img = loadImage ("purple.png");
  b5Img = loadImage ("blue.png");
  bow1 = loadImage ("bow1.png");
  bow2 = loadImage ("bow2.png");
  heartImg = loadImage ("heart.png");
  bombImg = loadImage ("bomb.png");

  p1Bow.addImage(bow1);
  p1Bow.scale = 0.1;
  p2Bow.addImage(bow2);
  p2Bow.scale = 0.1;
}

function draw() {
  background(255,255,255); 
  textSize (18);
  text("Score: " + p1score, 10, 50); 
  text("Lives: " + p1lives, 10, 80); 
  text("Score: " + p2score, displayWidth-120, 50); 
  text("Lives: " + p2lives, displayWidth-120, 80); 
  textSize (18);
  if(keyDown('w')){
    p1Bow.velocityY = -5;
  }
  if(keyDown('s')){
    p1Bow.velocityY = 5;
  }
  if(keyDown(UP_ARROW)){
    p2Bow.velocityY = -5;
  }
  if(keyDown(DOWN_ARROW)){
    p2Bow.velocityY = 5;
  }
  if (frameCount%100===0){
  spawnRedGrp();
  }
  if (frameCount%150===0){
    spawnGreenGrp();
  }
      
  if (frameCount%200===0){
    spawnYellowGrp();
  }
  if (frameCount%220===0){
    spawnPurpleGrp();
  }
  if (frameCount%250===0){
    spawnBlueGrp();
  }  
  if (frameCount%240===0){
    spawnBomb();
  }
  if (frameCount%500===0){
    spawnHeart();
  }
  drawSprites();
}
function spawnRedGrp(){

  var balloon1 = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  balloon1.velocityY = 10;
  balloon1.lifetime = 150;
  balloon1.addImage (b1Img);  
  balloon1.scale = 0.3;
 balloon1Grp.add(balloon1);
}

function spawnGreenGrp(){

  var balloon1 = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  balloon1.velocityY = 5;
  balloon1.lifetime = 150;
  balloon1.addImage (b2Img);  
  balloon1.scale = 0.3;
 balloon2Grp.add(balloon1);
}
function spawnYellowGrp(){

  var balloon1 = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  balloon1.velocityY = 4;
  balloon1.lifetime = 220;
  balloon1.addImage (b3Img);  
  balloon1.scale = 0.3;
 balloon3Grp.add(balloon1);
}
function spawnPurpleGrp(){

  var balloon1 = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  balloon1.velocityY = 7;
  balloon1.lifetime = 150;
  balloon1.addImage (b4Img);  
  balloon1.scale = 0.3;
 balloon4Grp.add(balloon1);
}
function spawnBlueGrp(){

  var balloon1 = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  balloon1.velocityY = 10;
  balloon1.lifetime = 150;
  balloon1.addImage (b5Img);  
  balloon1.scale = 0.3;
 balloon5Grp.add(balloon1);
}
function spawnHeart(){

  var heart = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  heart.velocityY = 10;
  heart.lifetime = 150;
  heart.addImage (heartImg);  
  heart.scale = 0.3;
 heartGrp.add(heart);
}
function spawnBomb(){
  var bomb = createSprite(Math.round(random(200, displayWidth-300),0, 10, 10));
  bomb.velocityY = 5;
  bomb.lifetime = 150;
  bomb.addImage (bombImg);  
  bomb.scale = 0.1;
 bombGrp.add(bomb);
}
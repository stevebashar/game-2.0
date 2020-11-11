const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var enemy,enemyIMG, Genemy,GenemyIMG, Bememy, BememyIMG, VGenemy,VGenemy, EnemyGroup,GenemyGroup,BenemyGroup,VGenemyGroup,abc;
var player, playerIMG;
var randX, randY;
var bg, bg2;
var score = 0;
var life = 3;
var PLAY = 1;
var END = 0;
var Gamestate = PLAY;
function preload(){
  bg2 = loadImage("Img/BG.png");
  enemyIMG = loadImage("Img/enemy.png");
  BenemyIMG = loadImage("Img/Benemy.png");
  VGenemyIMG = loadImage("Img/VGenemy.png");
  GenemyIMG = loadImage("Img/Genemy.png");
  playerIMG = loadImage("Img/Player.png");
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-140);
  engine = Engine.create();
  world = engine.world;
  EnemyGroup = new Group();
  BenemyGroup = new Group();
  GenemyGroup = new Group();
  VGenemyGroup = new Group();
  

  bg = createSprite(950,700,displayWidth,1000);
  bg.addImage(bg2);

  

  player = createSprite(500,500,100,100);
  player.addImage(playerIMG);
  player.scale = 0.05
  
}

function draw() {
  background(255,255,255);  
  if(Gamestate === PLAY){
  player.y = mouseY;
  player.x = mouseX;
  console.log(Gamestate);
  if(frameCount %60 === 0){
  randX = Math.round(random(50,displayWidth-60))
  randY = Math.round(random(50,displayHeight-190))
  enemy = createSprite(randX,randY,100,100);
  enemy.addImage(enemyIMG);
  EnemyGroup.add(enemy);
  EnemyGroup.setLifetimeEach(25);
  }
  
  if(frameCount %150 === 0){
    randX = Math.round(random(50,displayWidth-60))
    randY = Math.round(random(50,displayHeight-190))
    Genemy = createSprite(randX,randY,50,50);
    Genemy.addImage(GenemyIMG);
    Genemy.scale = 0.75
    GenemyGroup.add(Genemy);
    GenemyGroup.setLifetimeEach(20);
    
  }

    if(frameCount %80 === 0){
      randX = Math.round(random(50,displayWidth-60))
      randY = Math.round(random(50,displayHeight-190))
      Benemy = createSprite(randX,randY,50,50);
      Benemy.addImage(BenemyIMG);
      Benemy.scale = 0.5
      BenemyGroup.add(Benemy);
      BenemyGroup.setLifetimeEach(20);
      points();
    }
      
      if(frameCount %450 === 0){
        randX = Math.round(random(50,displayWidth-60))
        randY = Math.round(random(50,displayHeight-190))
        VGenemy = createSprite(randX,randY,50,50);
        VGenemy.addImage(VGenemyIMG);
        VGenemy.scale = 0.75
        VGenemyGroup.add(VGenemy);
        VGenemyGroup.setLifetimeEach(25);
        points(); 
      }
      if(EnemyGroup.isTouching(player)){
        EnemyGroup.setLifetimeEach(0);
        score = score + 1
      }
      if(GenemyGroup.isTouching(player)){
        GenemyGroup.setLifetimeEach(0);
        score = score + 3
      }
      if(BenemyGroup.isTouching(player)){
        BenemyGroup.setLifetimeEach(0);
        life = life - 1
      }
      if(VGenemyGroup.isTouching(player)){
        VGenemyGroup.setLifetimeEach(0);
        life = life + 1
      }
      if(life === 0){
        Gamestate = END
      console.log(Gamestate);
      }

      }



  Engine.update(engine);
  drawSprites();
  if(Gamestate === END){
    fill(0,255,0);
    textSize(30);

    text("Game Over",800,500)
  }
  fill(0,255,0);
  textSize(20);
  text("Score: " + score, 100,100);
  text("lives: " + life, 100,150);

}
function reset(){
  Gamestate = PLAY

  
}

function points(){

  if(mousePressedOver(GenemyGroup)){
    score = score + 1
  }
  if(mousePressedOver(VGenemyGroup)){
    score1();

  }
  if(mousePressedOver(BenemyGroup)){
    score1();
    
  }
  
}


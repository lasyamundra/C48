var player, playerImg;
var background, backImg;

var emptyBox, emptyBoxImg, emptyBoxImg;
var emptyBox2, emptyBox2Img,emptyBox2Img2;
var treasure, treasureImg, treasureImg2;

var gameLogo, gameLogoImg;
var storyPage, storyPageImg;

var timer = 20;

function preload(){
   backImg = loadImage ("images/background.jpg");
   playerImg = loadImage ("images/circle.png");

   emptyBoxImg = loadImage ("images/empty.png");
   emptyBoxImg2 = loadImage ("images/empty(1).png");

   emptyBox2Img = loadImage ("images/empty2.png");
   emptyBox2Img2 = loadImage ("images/empty2(1).png");

   treasureImg = loadImage ("images/treasure.png");
   treasureImg2 = loadImage ("images/treasure(1).png");

   gameLogoImg = loadImage ("images/gameLogo.jpg");
   storyPageImg = loadImage ("images/storyPage.jpg");
}

function setup(){
    createCanvas (windowWidth-20,windowHeight-20);

    background = createSprite (width/2,height/2);
    background.addImage (backImg);
    background.scale = 2.5;

    storyPage = createSprite (width/2, height/2-25);
    storyPage.addImage (storyPageImg);
    storyPage.scale = 0.58;

    player = createSprite (100,50);
    player.addImage (playerImg);
    player.scale = 0.025;
    player.visible = false;
}

function draw(){

    if (frameCount%20===0){
        timer--;
    }

    if (timer<0){
        storyPage.destroy();
        player.visible = true;
    }

    drawSprites();

    if (timer>=0){
        fill(0);
        textSize(15);
        text(timer,20,30);
    }
}

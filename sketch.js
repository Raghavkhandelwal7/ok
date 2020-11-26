var dog,happayDog,database,foodStock,foodS,dogIMG,happyDogIMG;

function preload()
{
 dogIMG=loadImage("Dog.png");
  happayDogIMG=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,100,50,20);
  dog.addImage(dogIMG);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happayDogIMG);
  }  
  drawSprites();

}
function readStock(data){
foodS=data.val;
}
function writeStock(x){

  if(x=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
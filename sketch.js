var canva;
var gameState;
var contestantCount;
var db;
var quiz;
var question; 
var contestant;
gameState=0;
function setup(){
  canvas = createCanvas(850,400);
db= firebase.database();
quiz= new Quiz();
quiz.getState();
quiz.start();

}


function draw(){
  background("pink");

  
}

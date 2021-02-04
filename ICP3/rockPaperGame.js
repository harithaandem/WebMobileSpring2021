var rockElement = document.getElementById("rock");
var paperElement = document.getElementById("paper");
var scissorElement = document.getElementById("scissors");
var playerSelected =  document.getElementById("player-selected-image");
var systemSelected =  document.getElementById("system-selected-image");
var scores = {
    player: 0,
    system: 0
};

var imagesForGame = [
    "https://user-images.githubusercontent.com/36616708/106801231-2080c600-6627-11eb-821a-8f43a75c3c40.png",
    "https://user-images.githubusercontent.com/36616708/106801222-1d85d580-6627-11eb-8bf4-950be2ed15c1.png",
    "https://user-images.githubusercontent.com/36616708/106801247-24144d00-6627-11eb-8491-267dc6d9bc30.png"
]

var result;
var systemNum;
rockElement.addEventListener('click',()=>{
    this.playerSelected.src = this.imagesForGame[0];
    this.systemNum = this.generaterandomNum();
   if(systemNum  <= 3){
      this.result = "Draw";
      this.systemSelected.src = this.imagesForGame[0];
   }
   else if(this.systemNum <= 6 && this.systemNum >= 4){
      this.result = "Loss";
      this.scores.system++;
      this.systemSelected.src = this.imagesForGame[1];
   }
   else if(this.systemNum <= 10 && this.systemNum >= 7){
    this.result = "Won!!!";
    this.scores.player++;
    this.systemSelected.src = this.imagesForGame[2];
 }
 document.getElementById('result').innerHTML=this.result;
 this.updateScore();
});

paperElement.addEventListener('click',()=>{
     this.systemNum = this.generaterandomNum();
     this.playerSelected.src = this.imagesForGame[1];
    if(this.systemNum  <= 3){
       this.result = "Won!!!";
       this.scores.player++;
       this.systemSelected.src = this.imagesForGame[0];
    }
    else if(this.systemNum <= 6 && this.systemNum >= 4){
       this.result = "Draw";
       this.systemSelected.src = this.imagesForGame[1];
    }
    else if(this.systemNum <= 10 && this.systemNum >= 7){
     this.result = "Loss";
     this.scores.system++;
     this.systemSelected.src = this.imagesForGame[2];
  }
  document.getElementById('result').innerHTML=this.result;
  this.updateScore();
});

scissorElement.addEventListener('click',()=>{
     this.systemNum = this.generaterandomNum();
     this.playerSelected.src = this.imagesForGame[2];
    if(this.systemNum  <= 3){
       this.result = "Loss";
       this.scores.system++;
       this.systemSelected.src = this.imagesForGame[0];
    }
    else if(this.systemNum <= 6 && this.systemNum >= 4){
       this.result = "Won!!!";
       this.scores.player++;
       this.systemSelected.src = this.imagesForGame[1];
    }
    else if(this.systemNum <= 10 && this.systemNum >= 7){
     this.result = "Draw";
     this.systemSelected.src = this.imagesForGame[2];
  }
  document.getElementById('result').innerHTML=this.result;
  this.updateScore();
});

function resetToInitial(){
    this.scores = {
        player: 0,
        system: 0
    }
    this.updateScore();
    document.getElementById('result').innerHTML="Start a New Game";
    this.playerSelected.src = ""
    this.systemSelected.src = "";

}
function generaterandomNum(){
    var randomNum = Math.floor((Math.random() * 10) + 1);
    return randomNum;
}

function updateScore(){
    console.log(this.scores)
    document.getElementById("playerScore").innerHTML = this.scores.player;
    document.getElementById("systemScore").innerHTML = this.scores.system;
}
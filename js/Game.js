class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();

    textSize(20)
    text("Get Ready!",130,0)

    Player.getPlayerInfo();

    if(allPlayers!=undefined){

      for(var plr in allPlayers){

        displayPosition = displayPosition + 30;
        textSize(15)
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition)
      }
    }
  }
}

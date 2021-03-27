class Player {
  constructor(){

    this.index = null;
    this.name = null;
    this.distance = null ;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player" + this.index;
    
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{

      allPlayers = data.val();

    })
  }
}

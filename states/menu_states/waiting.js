//waiting menu, when a player has choosen his hero and input his name, he waits till all 4 players are connected
var Waiting = function(game) {};
var players = [];

Waiting.prototype = {

    menuConfig: {
        className: "inverse",
        startY: 260,
        startX: "center"
    },

    init: function() {
        this.titleText = game.make.text(game.world.centerX, 100, "Waiting for players...", {
            font: 'bold 60pt TheMinion',
            fill: '#FDFFB5',
            align: 'center'
        });
        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
        this.optionCount = 1;
    },
    create: function() {
      var conf = {
          default: true,
          x1: 50,
          y1: 230,
          x2: 120,
          y2: 255,
          txt: 'Start',
          font:'16px TheMinion',
          color:'black'
      }

        //modify bg
        game.add.sprite(0, 0, 'bg');
        // add sprite with 4 heros
        //add sprite with input name
        //orange-games phaser-input
        game.add.existing(this.titleText);

        this.addMenuOption('<- Back', function() {
            game.state.start("GameMenu");
        });

        this.addButtonCanvas(null, conf);
    }



    /*update: function() {
        //update nombre joueur connecté
        //action when 4 are connect => lancer le game
    }*/
};

var addPlayer = function(user){
  players.push(user);
  displayPlayers();
  if(players.length === 4){
    game.state.start("Play");
  }
}

var displayPlayers = function(){
  for(var i=0; i<players.length; i++){
    console.log(players[i]);
    
  }
}

Phaser.Utils.mixinPrototype(Waiting.prototype, mixins);

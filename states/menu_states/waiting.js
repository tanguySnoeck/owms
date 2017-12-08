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
        //modify bg
        game.add.sprite(0, 0, 'bg');
        // add sprite with 4 heros
        //add sprite with input name
        //orange-games phaser-input
        game.add.existing(this.titleText);

        this.addMenuOption('<- Back', function() {
            game.state.start("GameMenu");
        });
    },

    addPlayer : function(data){
      console.log("waiting : " +data);
      players.push(data);
      //console.log(data.userName + " connected !");
      if(players.length === 4){
        game.state.start("Play");
      }
    },

    /*update: function() {
        //update nombre joueur connecté
        //action when 4 are connect => lancer le game
    }*/
};

Phaser.Utils.mixinPrototype(Waiting.prototype, mixins);

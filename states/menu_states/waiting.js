var Waiting = function(game) {};
var playersTxt= [];
var temp=[];
var isEmpty = true;
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
        //background
        game.add.sprite(0, 0, 'bg');
        game.add.existing(this.titleText);
        var conf = {
            default: true,
            x1: 50,
            y1: 415,
            x2: 130,
            y2: 440,
            txt: 'Back',
            font:'16px TheMinion',
            color:'black',
            height:0,
            size:0
        }

        //button back
        this.addButtonCanvas(function(){
            game.state.start("GameMenu");
        }, conf);
        this.addButtonTxt(conf);

        conf.x1=game.width/2-150,conf.y1 = 175,conf.x2 = 130, conf.y2 = 440, conf.txt="", conf.height=250,conf.size=300;
        this.addButtonCanvas(function(){}, conf);

        conf.x2 = game.width/2-90, conf.y2 = 200, conf.txt="Players Connected";
        this.addButtonTxt(conf);

        conf.x2 = game.width/2-60, conf.y2 = 240, conf.txt="";
        var p1 = this.addButtonTxt(conf);
        conf.x2 = game.width/2-60, conf.y2 = 280, conf.txt="";
        var p2 = this.addButtonTxt(conf);
        conf.x2 = game.width/2-60, conf.y2 = 320, conf.txt="";
        var p3 = this.addButtonTxt(conf);
        conf.x2 = game.width/2-60, conf.y2 = 360, conf.txt="";
        var p4 = this.addButtonTxt(conf);
        playersTxt.push(p1);
        playersTxt.push(p2);
        playersTxt.push(p3);
        playersTxt.push(p4);

        printPlayer(temp);
        isEmpty = false;
        //console.log("temp[0] : " + temp[0].login);
    }
};

Phaser.Utils.mixinPrototype(Waiting.prototype, mixins);

function printPlayer(table){
    if(table.length == 4){
        game.state.start('Boot');
    }
    //reset affichage des noms
    for(var i=0; i<4; i++){
        playersTxt[i].setText("");
    }
    //affiche les noms
    for(i=0; i<table.length; i++){
        playersTxt[i].setText(table[i].login);
    }
}


function tmp(table){
  console.log("TMP " + table.length);
  for(var i =0;i < table.length; i++){
    console.log("tmp : " + table[i].login)
    temp[i] = table[i];
  }
  if(!isEmpty){
    printPlayer(temp)
  }
}

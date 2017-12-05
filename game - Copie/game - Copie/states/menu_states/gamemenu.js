var GameMenu = function() {};

GameMenu.prototype = {

    menuConfig: {
        startY: 230,
        startX: 30
    },

    init: function() {
        this.titleText = game.make.text(game.world.centerX, 100, "OWMS", {
            font: 'bold 60pt TheMinion',
            fill: '#FDFFB5',
            align: 'center'
        });
        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
        this.optionCount = 1;
    },

    create: function() {
        if (music.name !== "dangerous" && playMusic) {
            music.stop();
            music = game.add.audio('dangerous');
            music.loop = true;
            //music.play();
        }

        game.stage.disableVisibilityChange = true;
        game.add.sprite(0, 0, 'bg');
        game.add.existing(this.titleText);

        //configuration for canvas button for menu
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

        //canvas => select
        this.addButtonCanvas(function() {
            game.state.start("Select");
        }, conf);
        this.addButtonTxt(conf);

        //canvas2 => options
        conf.y1 = 295,conf.x2 = 115, conf.y2 = 320, conf.txt="Options";  
        this.addButtonCanvas(function() {
            game.state.start('Options');
        }, conf);
        this.addButtonTxt(conf);

        //canvas3 => credits
        conf.y1 = 360,conf.x2 = 115, conf.y2 = 385, conf.txt="Credits"; 
        this.addButtonCanvas(function() {
            game.state.start('Credits');
        }, conf);
        this.addButtonTxt(conf);

        //canvas4 => test the game without connexion
        conf.y1 = 425,conf.x2 = 120, conf.y2 = 450, conf.txt="Test=>"; 
        this.addButtonCanvas(function() {
            game.state.start('Boot'); //start game !
        }, conf);
        this.addButtonTxt(conf);
    }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
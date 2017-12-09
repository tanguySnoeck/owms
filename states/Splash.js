var Splash = function() {};

Splash.prototype = {

    loadScripts: function() {
        game.load.script('client', 'states/client.js')
        //Lib
        game.load.script('style', 'lib/style.js');
        game.load.script('mixins', 'lib/mixins.js');
        game.load.script('WebFont', 'vendor/webfontloader.js');
        //Menu_states
        game.load.script('gamemenu', 'states/menu_states/gamemenu.js');
        game.load.script('game', 'states/menu_states/Game.js');
        game.load.script('gameover', 'states/menu_states/gameover.js');
        game.load.script('credits', 'states/menu_states/credits.js');
        game.load.script('options', 'states/menu_states/options.js');
        game.load.script('select', 'states/menu_states/Select.js');
        game.load.script('waiting', 'states/menu_states/waiting.js');
        /*game.load.script('stats', 'states/menu_states/Stats.js');
        game.load.script('pause', 'states/menu_states/Pause.js');
        */

        //Game_states
        //game.load.script('Weapons', 'states/game_states/weapons.js');
        game.load.script('boot', 'states/game_states/boot.js');
        game.load.script('play', 'states/game_states/play.js');


    },

    loadBgm: function() {
        // thanks Kevin Macleod at http://incompetech.com/
        //game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
        //game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
    },
    // varios freebies found from google image search
    loadImages: function() {
        //Menu_images
        game.load.image('menu-bg', 'assets/images/menu_images/menu-bg.jpg');
        game.load.image('options-bg', 'assets/images/menu_images/options-bg.jpg');
        game.load.image('gameover-bg', 'assets/images/menu_images/gameover-bg.jpg');
        //Canvas for buttons
        game.load.nineSlice('input', 'assets/images/menu_images/inputfield.png', 15);
        game.load.nineSlice('btn', 'assets/images/menu_images/btn_clean.png', 20, 23, 27, 28);
        //Game_images
        game.load.image('sky', '/assets/images/game_images/bg_futurist.png');
        game.load.image('ground', '/assets/images/game_images/platform.png');
        game.load.image('star', '/assets/images/game_images/star.png');
        game.load.spritesheet('dude', '/assets/images/game_images/dude.png', 32, 48);
        game.load.image('sword', 'assets/images/game_images/sword.png');
        game.load.image('portalDown','assets/images/game_images/portaldown.png');
        game.load.spritesheet('portal','/assets/images/game_images/portal.png', 52, 85);
        game.load.spritesheet('trap', '/assets/images/game_images/piege.png', 195, 130);
		game.load.spritesheet('kalash','/assets/images/game_images/kalash.png',210,60);
		game.load.image('bullet', '/assets/images/game_images/bullet.png');
    },

    loadFonts: function() {
        WebFontConfig = {
            custom: {
                families: ['TheMinion'],
                urls: ['assets/style/theminion.css']
            }
        }
    },

    init: function() {
        this.loadingBar = game.make.sprite(game.world.centerX - (387 / 2), 400, "loading");
        this.logo = game.make.sprite(game.world.centerX, 200, 'brand');
        this.status = game.make.text(game.world.centerX, 380, 'Loading...', { fill: 'white' });
        utils.centerGameObjects([this.logo, this.status]);
    },

    preload: function() {
        game.add.sprite(0, 0, 'bg');
        game.add.existing(this.logo).scale.setTo(0.5);
        game.add.existing(this.loadingBar);
        game.add.existing(this.status);
        this.load.setPreloadSprite(this.loadingBar);

        this.loadScripts();
        this.loadImages();
        this.loadFonts();
        this.loadBgm();

    },

    addGameStates: function() {
        //menu_states
        game.state.add("GameMenu", GameMenu);
        game.state.add("Game", Game);
        game.state.add("GameOver", GameOver);
        game.state.add("Select", Select);
        game.state.add("Credits", Credits);
        game.state.add("Options", Options);
        game.state.add("Waiting", Waiting);
        /*game.state.add("Pause", Pause);
        game.state.add("Stats", Stats);
        game.state.add('boot', Boot);*/
        //game_states
        game.state.add('Boot', Boot);
        game.state.add('Play', Play);

    },

    addGameMusic: function() {
        music = game.add.audio('dangerous');
        music.loop = true;
        music.play();
    },

    create: function() {
        this.status.setText('Ready!');
        this.addGameStates();
        this.addGameMusic();

        setTimeout(function() {
            game.state.start("GameMenu");
        }, 1000);
    }
};

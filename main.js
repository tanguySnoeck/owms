// Global Variables
var isConnected = false;
var user;
var testHolder;
var password;

var game = new Phaser.Game(1250, 500, Phaser.AUTO, 'game'),
    Main = function() {},
    gameOptions = {
        playSound: false,
        playMusic: false
    },
    musicPlayer;

Phaser.Device.whenReady(function() {
    game.plugins.add(PhaserInput.Plugin);
    game.plugins.add(PhaserNineSlice.Plugin);
});

Main.prototype = {

    preload: function() {
        game.load.image('loading', 'assets/images/menu_images/loading.png');
        game.load.image('brand', 'assets/images/menu_images/logo.png');
        game.load.image('bg', 'assets/images/menu_images/bg.png');
        game.load.script('polyfill', 'lib/polyfill.js');
        game.load.script('utils', 'lib/utils.js');
        game.load.script('splash', 'states/Splash.js');
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      	game.scale.pageAlignVertically = true;
      	game.scale.pageAlignHorizontally = true;
      	game.scale.updateLayout( true );
    },

    create: function() {
        game.state.add('Splash', Splash);
        game.state.start('Splash');
    }


};

game.state.add('Main', Main);
game.state.start('Main');

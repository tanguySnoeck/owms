var loadState = {
  preload: function() {
    game.load.image('sky','/assets/bg_futurist.png');
  	game.load.image('ground', '/assets/platform.png');
  	game.load.image('star','/assets/star.png');
  	game.load.spritesheet('dude','/assets/dude.png',32,48);
  	game.load.image('sword', 'assets/sword.png');
    game.load.image('bullet', '/assets/bullet.png');
    game.load.image('fatty', '/assets/fatty.png');
    game.load.spritesheet('kalash','/assets/kalash.png',210,60);
    console.log('loadState preload !');
  },

  create: function() {
    game.state.start('menu');
    console.log('loadState create !');
  }
};

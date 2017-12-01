var loadState = {
  preload: function() {
    game.load.image('sky','/assets/bg_futurist.png');
  	game.load.image('ground', '/assets/platform.png');
  	game.load.image('star','/assets/star.png');
  	game.load.spritesheet('dude','/assets/dude.png',32,48);
  	game.load.image('sword', 'assets/sword.png');
    game.load.image('portalDown','assets/portaldown.png');
    game.load.spritesheet('portal','assets/portal.png',52,85);
    game.load.spritesheet('trap','assets/piege.png',195,130);
    console.log('loadState preload !')
  },

  create: function() {
    game.state.start('menu');
    console.log('loadState create !')
  }
};

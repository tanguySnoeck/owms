var game = new Phaser.Game(1250, 500, Phaser.AUTO, document.getElementById('game'));

game.state.add('boot', bootState);
game.state.add('play', playState);
game.state.add('load', loadState);
game.state.add('menu', menuState);

game.state.start('boot');

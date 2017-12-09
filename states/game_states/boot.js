
var Boot = function() {};


Boot.prototype = {
  create : function(){
  	var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  	//testKey.onDown.add(Client.sendTest, this);

    //taille niveau
    game.world.setBounds(0,0,6000,1000);

  	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;

    game.state.start('Play');
    console.log("bootState ! ")
  }
};

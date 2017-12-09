var menuState = {
  create : function(){
    console.log('menuState create !')
    game.state.start('play');
  },

  start : function(){
    game.state.start('play');
    console.log('menuState start !')
  },
};

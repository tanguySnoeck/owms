
var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.socket.on('newplayer',function(data){
    Play.addNewPlayer(data);
});


Client.socket.on('allplayers',function(data){
    for(var i = data.length-1; i >= 0; i--){
        Play.addNewPlayer(data[i]);
    }

    Client.socket.on('remove',function(id){
        Play.removePlayer(id);
    });
    Client.socket.on('move',function(playerSocket,fire){
        Play.movePlayer(playerSocket,fire);
    });
});

Client.socket.on('ajoutActive',function(data){
  Play.ajoutActive(data.idPlayer,data.idItem);
});

Client.newUser = function(name, pswd){
  console.log("newUser : " + name + " " + pswd);
  Client.socket.emit('addUser', {userName : name, password : pswd});
};

Client.socket.on('playerConnected', function(data){
  console.log("playerConnected ! ");
  console.log("client : " + data);
  Waiting.prototype.addPlayer.call(data);
});



Client.ajouterActiveWeapon=function(idPlayer,idItem){
  Client.socket.emit('ajouterActive',{idPlayer:idPlayer,idItem:idItem});
};

Client.supprimerArme=function(activeWeapon){
    Client.socket.emit('supprArme',{id : activeWeapon.id});
};

Client.socket.on('remove',function(id){
    Play.removePlayer(id);
});

Client.socket.on('supprArme',function(idWeapon){
  Play.supprArme(idWeapon);
});

Client.sendClick = function(x,y,fire){
  Client.socket.emit('click',{x:x,y:y,fire:fire});
};

Client.socket.on('spawnArme',function(x,y,arme){
  Play.addWeapon(x,y,arme);
});

Client.finish=function(idPlayer){
  Client.socket.emit('finish',{idPlayer:idPlayer});
};

Client.socket.on('winner',function(data){
  console.log('dans winner');
  Play.fin();

});

var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.socket.on('newplayer',function(data){
    playState.addNewPlayer(data);
});


Client.socket.on('allplayers',function(data){
    for(var i = data.length-1; i >= 0; i--){
        playState.addNewPlayer(data[i]);
    }

    Client.socket.on('remove',function(id){
        playState.removePlayer(id);
    });
    Client.socket.on('move',function(playerSocket,fire){
        playState.movePlayer(playerSocket,fire);
    });
});

Client.socket.on('ajoutActive',function(data){
  playState.ajoutActive(data.idPlayer,data.idItem);
});


Client.ajouterActiveWeapon=function(idPlayer,idItem){
  Client.socket.emit('ajouterActive',{idPlayer:idPlayer,idItem:idItem});
};

Client.supprimerArme=function(activeWeapon){
    Client.socket.emit('supprArme',{id : activeWeapon.id});
};

Client.socket.on('remove',function(id){
    playState.removePlayer(id);
});

Client.socket.on('supprArme',function(idWeapon){
  playState.supprArme(idWeapon);
});

Client.sendClick = function(x,y,fire){
  Client.socket.emit('click',{x:x,y:y,fire:fire});
};

Client.socket.on('spawnArme',function(x,y,arme){
  playState.addWeapon(x,y,arme);
});

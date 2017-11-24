var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.socket.on('newplayer',function(data){
    playState.addNewPlayer(data.id,data.x,data.y);
});


Client.socket.on('allplayers',function(data){
    for(var i = data.length-1; i >= 0; i--){
        playState.addNewPlayer(data[i].id,data[i].x,data[i].y);
    }

    Client.socket.on('remove',function(id){
        playState.removePlayer(id);
    });
    Client.socket.on('move',function(data){
        playState.movePlayer(data);
    });
});

Client.supprimerArme=function(activeWeapon){
    Client.socket.emit('supprArme',{id : activeWeapon.id});
};

Client.socket.on('remove',function(id){
    playState.removePlayer(id);
});

Client.socket.on('supprArme',function(idWeapon){
  playState.supprArme(idWeapon);
});

Client.sendClick = function(x,y){
  Client.socket.emit('click',{x:x,y:y});
};

Client.socket.on('spawnArme',function(x,y,arme){
  playState.addWeapon(x,y,arme);
});

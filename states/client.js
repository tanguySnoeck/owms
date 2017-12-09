var Client = {};
Client.socket = io.connect();

Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.socket.on('newplayer',function(data){
    Play.addNewPlayer(data.id,data.x,data.y);
});

Client.socket.on('allplayers',function(data){
    for(var i = data.length-1; i >= 0; i--){
        Play.addNewPlayer(data[i].id,data[i].x,data[i].y);
    }

    Client.socket.on('remove',function(id){
        Play.removePlayer(id);
    });
    Client.socket.on('move',function(data){
        Play.movePlayer(data);
    });
});

Client.newUser = function(name, pswd){
  console.log("newUser : " + name + " " + pswd);
  Client.socket.emit('addUser', {userName : name, password : pswd});
}

Client.socket.on('playerConnected', function(user){
  console.log("playerConnected ! ");
  console.log("client : " + user);
  addPlayer(user);
});

Client.socket.on('remove',function(id){
    playState.removePlayer(id);
});

Client.sendClick = function(x,y, activeWeapon){
  Client.socket.emit('click',{x:x,y:y, activeWeapon:activeWeapon});
};

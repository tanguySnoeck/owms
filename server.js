var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/base.html');
});

server.lastPlayderID = 0;
server.lastArmeID=0;

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});

io.on('connection',function(socket){

    socket.on('newplayer',function(){
        socket.player = {
            id: server.lastPlayderID++,
            sprite:undefined,
            activeWeapon:undefined
        };
        socket.emit('allplayers',getAllPlayers());
        socket.broadcast.emit('newplayer',socket.player);

        socket.on('click',function(data){
            socket.player.x = data.x;
            socket.player.y = data.y;
            socket.broadcast.emit('move',socket.player);
        });

        socket.on('disconnect',function(){
            io.emit('remove',socket.player.id);
        });
    });

    socket.on('supprArme',function(data){
      io.emit('supprArme',data.id);
    });

    socket.on('ajouterActive',function(data){
      io.emit('ajoutActive',data);
    });

    socket.on('test',function(){
        console.log('test received');
    });
});


setInterval(createWeapon,10000);


function createWeapon(){
  var arme={id:server.lastArmeID++,
    spriteName:"sword",
    sprite:undefined,
    owner:undefined
  };
  io.emit('spawnArme',randomInt(10,800),randomInt(500,600),arme);
}



function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

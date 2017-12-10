var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io').listen(server);
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://tanguy:owms@ds151544.mlab.com:51544/owms";
//pour déterminer portail joueur
var cpt = 0;

console.log('bjr');
var localPath = path.join(__dirname, '.');
app.use(express.static(localPath));

app.use(express.static('.'));
/*
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/lib', express.static(__dirname + '/lib'));
*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.lastPlayderID = 0;
server.lastArmeID=0;

server.listen(process.env.PORT || 8081, function() {
    console.log('Listening on ' + server.address().port);
});

io.on('connection', function(socket) {
      socket.on('newplayer', function() {
        console.log("CPT " + cpt);
        socket.player = {
            id: server.lastPlayderID++,
            sprite:undefined,
            activeWeapon:undefined,
            activeWeaponSprite:undefined,
            portail : cpt%2
        };
        cpt++;
        socket.emit('allplayers', getAllPlayers());
        socket.broadcast.emit('newplayer', socket.player);

        socket.on('click',function(data){
            socket.player.x = data.x;
            socket.player.y = data.y;
            socket.broadcast.emit('move',socket.player,data.fire);
        });

        socket.on('disconnect', function() {
            io.emit('remove', socket.player.id);
        });
    });

    socket.on('addUser', function(data){
      addUser(data);
      socket.broadcast.emit('playerConnected', data.userName + data.password);
    });

    socket.on('test', function() {
        console.log('test received');
    });
    socket.on('finish',function(data){
      io.emit('winner',data);
    });
});

function addUser(data){
  MongoClient.connect(url, function(err, db){
    if(err)throw err;
    /*db.collection("Users").insert({name : data.userName, password : data.password}, function(err, data){
      if(err) throw err;
      console.log("User added !");
    });*/
    console.log("User added !");
    //waiting.addPlayer(data);
  });
}

function getAllPlayers() {
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID) {
        var player = io.sockets.connected[socketID].player;
        if (player) players.push(player);
    });
    return players;
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

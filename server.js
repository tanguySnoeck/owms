var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io').listen(server);
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://tanguy:owms@ds151544.mlab.com:51544/owms";

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
        socket.player = {
            id: server.lastPlayderID++,
            x: randomInt(100, 400),
            y: randomInt(100, 400)
        };
        socket.emit('allplayers', getAllPlayers());
        socket.broadcast.emit('newplayer', socket.player);

<<<<<<< HEAD
        socket.on('click', function(data) {
            //console.log('click to ' + data.x + ', ' + data.y);
=======
        socket.on('click',function(data){
>>>>>>> multi
            socket.player.x = data.x;
            socket.player.y = data.y;
            socket.broadcast.emit('move', socket.player);
        });

        socket.on('disconnect', function() {
            io.emit('remove', socket.player.id);
        });
    });

<<<<<<< HEAD
    socket.on('addUser', function(data){
      addUser(data);
      socket.broadcast.emit('playerConnected', data.userName + data.password);
    });

    socket.on('test', function() {
=======
    socket.on('supprArme',function(data){
      io.emit('supprArme',data.id);
    });

    socket.on('test',function(){
>>>>>>> multi
        console.log('test received');
    });
    socket.on('finish',function(data){
      io.emit('winner',data);
    });
});

<<<<<<< HEAD
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
=======
setInterval(createWeapon,8000);


function createWeapon(){
  var arme={id:server.lastArmeID++,
    spriteName:"sword",
    sprite:undefined,
    owner:undefined
  };
  io.emit('spawnArme',randomInt(350,800),randomInt(850,851),arme);
}


>>>>>>> multi

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

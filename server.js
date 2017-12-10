var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io').listen(server);
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://tanguy:owms@ds151544.mlab.com:51544/owms";
//pour déterminer portail joueur
var cpt = 0;
var tabJoueur=[];

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
        var newId;
        for(var i=0;i<server.lastPlayderID;i++){
          if(tabJoueur[i]!==undefined &&  tabJoueur[i].inGame===false){
            tabJoueur[i].inGame=true;
            newId=i;
            break;
          }
        }

        socket.player = {
            id: newId,
            sprite:undefined,
            activeWeapon:undefined,
            activeWeaponSprite:undefined,
            portail : cpt%2
        };
        console.log(tabJoueur);
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
            console.log("PROUT : " + tabJoueur.length);
            delete tabJoueur[socket.player.id];
            console.log("BITE : " + tabJoueur.length);
            socket.broadcast.emit("playerConnected", tabJoueur);
        });
    });

    socket.on('addUser', function(data){
        console.log("menuConnexion")
        tabJoueur[server.lastPlayderID]={login:data.userName,inGame:false};
        console.log("id : " + server.lastPlayderID + "login : " +  tabJoueur[server.lastPlayderID].login);
        server.lastPlayderID++;
        checkUserDB(data);
        socket.emit('playerConnected', tabJoueur); //<- tabJoueur
        socket.broadcast.emit("playerConnected", tabJoueur);
    });
    socket.on('test', function() {
        console.log('test received');
    });
    socket.on('finish',function(data){
      io.emit('winner',data);
    });

    socket.on('menuConnexion',function(){

    });
    //Quand client est créer, on appelle cete fonction.

});

function checkUserDB(data) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var query = { name: data.userName, password: data.password };
        var res = db.collection("Users").find(query).limit(1).size();
        console.log(res);
        if (res == 1) {
            console.log('User already present in db !');
        } else {
            addUserDB(query);
        }
    });
}


function loginUser(user, pswd){
  MongoClient.connect(url, function(err, db){
    if(err)throw err;
    db.collection("Users").find({name : user, password : pswd}, function(err, data){
      if(err)throw err;
    });
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

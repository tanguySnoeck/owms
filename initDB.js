var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://tanguy:owms@ds151544.mlab.com:51544/owms"

MongoClient.connect(url, function(err, db){
  if(err)throw err;
  db.createCollection("Users", {autoIndexId : true});
  console.log("Connection to db established ! ");
});

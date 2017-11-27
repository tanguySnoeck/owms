var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://tanguy:owms@ds151544.mlab.com:51544/owms"

MongoClient.connect(url, function(err, db){
  if(err)throw err;
  console.log("Connection to db established ! ");

  db.createCollection("users", {autoIndexId : true, });
});

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Pets";

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  var pets = [
      { pet: "Cat", cost: "40" },
      { pet: "Dog", cost: "60" },
      { pet: "Fish", cost: "100" },
      { pet: "Bird", cost: "80" }
      ];
  const mydatabase = database.db('Pets')    
  mydatabase.collection("pets").insertMany(pets, function(err, res) {
    if (err) console.error(err);
    console.log("no of documents inserted are: " + res.insertedCount);
 //   db.close();
  });
    
  var users = { usrName: "vipin", password: "vipin123" };
  mydatabase.collection("users").insertOne(users, function(err, res) {
    if (err) console.error(err);
    console.log("no of users inserted are: " + res.insertedCount);
    database.close();
  });
});
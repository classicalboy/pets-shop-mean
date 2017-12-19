// ----- initialization
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended:false});
var database = require('./config/database'); 
var mongoose = require('mongoose'); 
var users = require('./models/users');
var pets = require('./models/pets');
mongoose.connect(database.localUrl);

app.use(express.static('public'));

app.post('/authenticate', urlencodeParser, function(req, res){
	
});

app.post('/create', urlencodeParser, function(req, res){
  
   users.create({
      userName:req.body.username,
      name:req.body.name,
      password:req.body.password
        }, function (err, data) {
            if (err)
                res.send(err);
        });
});

app.get('/pets', urlencodeParser, function(req, res){
 pets.find(function(err, pets){
    if(err)
     res.send(err)

    res.json(pets);
   });
});

var server = app.listen(3001, function () {
  
var port = server.address().port

console.log('pets-shop app listening on port 3001. Base url is http://localhost:%s',  port)
});

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var User = new Schema ({
//     username : String,
//     password : String,
//     email: string
// 

//mongoose.model = ('User', user);
//mongoose.connect('mongodb://localhost:27017/userdb');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view-engine', 'ejs');

app.get('/', function(req,res){
    res.render('/view/home');
});

app.listen(5000, function(req,res){
    console.log("Port start on : " +port );
})
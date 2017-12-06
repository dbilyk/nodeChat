var express = require("express");
var db = require("mongodb").MongoClient;
var bodyparser = require("body-parser");
var app = express();
var pug = require("pug");
var loginHandlers = require('./controllers/handlers/loginHandlers.js')
var router = express.router;
//app.use will be called on EVERY ROUTE unless a specific URL path is indicated.
app.use(bodyparser.json());
app.use(express.static("public"));

//sets views folder and view engine for use with the "render" function on the res param
app.set("port",process.env.PORT || "3000");
app.set("views",__dirname + "/views");
app.set("view engine","pug");


app.post("/signup",function(err,req,res,next){
    var loginCredentials = req.body;
    ChatUsers.insertOne(loginCredentials);
    res.send("true");
})

app.listen(3000, () => console.log("app listening on port 3000"));
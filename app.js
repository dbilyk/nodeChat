var express = require("express");
var db = require("mongodb").MongoClient;
var bodyparser = require("body-parser");
var app = express();
var pug = require("pug");


app.use(bodyparser.json());
app.use(express.static("public"));

//sets views folder and view engine for use with the "render" function on the res param
app.set("port",process.env.PORT || "3000");
app.set("views",__dirname + "/views");
app.set("view engine","pug");

var ChatUsers;

//the url contains the login credentials for the database, must be formatted EXACTLY as such
db.connect("mongodb://chatdb3336:Pk9p-5W-hB2w@den1.mongo1.gear.host:27001/chatdb3336", function (err, DB) {
    ChatUsers = DB.collection("ChatUsers");
    
});


app.get('/', function (req, res, next) {
    //when you target root, yo uget the login page.  pug.compileFile 
    var loginPage = pug.compileFile("views/pages/login.pug");
    res.send(loginPage());
    res.send(loginPage());


});

//this route listens for login POST request
app.post('/login', function (req, res, next) {
   
    var loginCredentials = req.body;
    //queries the database of chatUsers for username that was passed in.
    ChatUsers.findOne({username : loginCredentials.username}, 
        function (err, obj) {
        //if there is no such user or if the password doesnt match
        if(!obj || obj.password != loginCredentials.password){
            res.send("false");
            console.log("username or password incorrect");
        }
        else{
            //if credentials match
            res.send("true");
        }
    })



})
app.post("/signup",function(err,req,res,next){
    var loginCredentials = req.body;
    ChatUsers.insertOne(loginCredentials);
    res.send("true");
})
    

app.listen(3000, () => console.log("app listening on port 3000"));
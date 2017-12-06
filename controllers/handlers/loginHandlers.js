var pug = require("pug");
var loginModel = require("../../models/loginModel.js");
var loginHandlers = {};

loginHandlers.getLoginPage = function(err,req,res,next){
    //when you target root, yo uget the login page.  pug.compileFile 
    var loginPage = pug.compileFile(__dirname + "views/pages/login.pug");
    console.log(loginPage);
    res.send(loginPage());
    
}

loginHandlers.authenticate = function (err,req,res,next){
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
}

module.exports.loginHandlers = loginHandlers;


const pug = require("pug");
const loginAuth = require("../../models/loginAuth.js");

function loginHandlers(){
    this.getLoginPage = function(req,res){
        //when you target root, yo uget the login page.  pug.compileFile 
        var loginPage = pug.compileFile(__dirname + "../../../views/pages/login.pug");
        res.send(loginPage());
        
        
    }

    this.authenticate = function (req,res){
        var loginCredentials = req.body;
        console.log(res.send);
        loginAuth.auth(loginCredentials,res.send.bind(res));
    }
}

module.exports = new loginHandlers();


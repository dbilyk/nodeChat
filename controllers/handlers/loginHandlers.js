const pug = require("pug");
const loginAuth = require("../../models/loginAuth.js");
const signUp = require("../../models/signUpModel.js")

function loginHandlers() {
    //sends login template
    this.getLoginPage = function (req, res) {
        var loginPage = pug.compileFile(__dirname + "../../../views/pages/login.pug");
        res.send(loginPage());


    }
    //sends signup pug template    
    this.getSignUpPage = function (req, res) {
        var signupPage = pug.compileFile(__dirname + "../../../views/pages/signup.pug");
        res.send(signupPage());
    }

    this.authenticate = function (req, res) {
        var loginCredentials = req.body;
        loginAuth.auth(loginCredentials, res.send.bind(res));
    }

    this.signUpUser = function(req, res){
        var loginCredentials = req.body;
        signUp.requestSignup(loginCredentials,res.send.bind(res));

    }

}

module.exports = new loginHandlers();


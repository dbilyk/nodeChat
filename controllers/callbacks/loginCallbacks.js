var loginHandlers = {};

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

module.exports = loginHandlers;


var db = require("mongodb");

var loginModel = {};

loginModel.getCollection = function (collectionName, callback) {
    //the url contains the login credentials for the database, must be formatted EXACTLY as such
    db.connect("mongodb://chatdb3336:Pk9p-5W-hB2w@den1.mongo1.gear.host:27001/chatdb3336", function (err, DB) {
        if (err) {
            console.log(err);
        }
        else {
            callback(DB.collection(collectionName));
        }
    });
}
//
loginModel.getUser = function(collection,userName, callback){
    collection.findOne({username:userName},callback);
}

//callback for findOne
loginModel.isValid = function(err, obj){

}

module.exports.loginModel = loginModel;
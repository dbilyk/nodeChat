const db = require("mongodb").MongoClient;

function loginAuth() {
    var userInput;
    var resultCall;

    this.auth = function (userJSON, resultCallback) {
        userInput = userJSON;
        resultCall = resultCallback;

        connectToDatabase();
    }

    //these are all private functions.
    var connectToDatabase = function () {
        //the url contains the login credentials for the database, must be formatted EXACTLY as such
        db.connect("mongodb://chatdb3336:Pk9p-5W-hB2w@den1.mongo1.gear.host:27001/chatdb3336",
            (err, DB) => {
                if (err) {
                    console.log(err);
                }
                else {
                    getCollection(null, DB);
                }
            });
    }

    var getCollection = function (err, database) {
        var collection = database.collection("ChatUsers");
        if (!collection) {
            console.log("no such collection exists, perhaps it was renamed?\n" + console.trace);
        }
        else {
            validateUser(collection, userInput);
        }
    }

    var validateUser = function (collection, userDoc) {
        //this is an example of promises in action! They come bundled with the MongoDB Client Module.
        collection.findOne(userDoc).then((user) => {
            if (!user) {

                resultCall("loginFailed");
            }
            else {
                resultCall("loginSucceeded");
            }
        }).catch((err)=>{console.log(err)});

    }

}
module.exports = new loginAuth();
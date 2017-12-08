var DB = require("mongodb").MongoClient;

function signUp() {
    this.requestSignup = function (userJSON, onComplete) {
        if (!userJSON.username || !userJSON.password || userJSON.password.length < 8 ) {
            onComplete("password must be at least 8 characters.");
            return;
        }
        else {

        }
        DB.connect("mongodb://chatdb3336:Pk9p-5W-hB2w@den1.mongo1.gear.host:27001/chatdb3336")
            .then((db) => {
                db.collection("ChatUsers").insertOne(userJSON).then(() => {
                    onComplete("true");

                });



            }).catch((err) => { console.log(err) });

    }
}

module.exports = new signUp();
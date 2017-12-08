var express = require("express");
var db = require("mongodb").MongoClient;
var bodyparser = require("body-parser");
var app = express();
var pug = require("pug");
var loginRoutes = require('./controllers/routes/loginRoutes.js');
//app.use will be called on EVERY ROUTE unless a specific URL path is indicated.
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(loginRoutes);
//sets views folder and view engine for use with the "render" function on the res param
app.set("port",process.env.PORT || "3000");

app.listen(3000, () => console.log("app listening on port 3000"));
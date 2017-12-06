var express = require("express");
var loginHandlers = require("../handlers/loginHandlers.js");
var loginModel = require("../../models/loginModel.js");
//this is the object that contains all our routes
var router = express.router();
router.get("/", loginHandlers.getLoginPage);

router.post("/login", loginHandlers.authenticate);
const express = require("express");
const loginHandlers = require("../handlers/loginHandlers.js");

//this is the object that contains all our routes
var router = express.Router();

router.get("/", loginHandlers.getLoginPage);

router.post("/login", loginHandlers.authenticate);

router.get("/getSignupPage", loginHandlers.getSignUpPage);

router.post("/signupUser", loginHandlers.signUpUser);

module.exports = router;
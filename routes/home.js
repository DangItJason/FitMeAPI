var express = require("express");
var router = express.Router();
var User = require("../models.js");

//Retrieves exercises from database on home launch.
router.post("/homes", function (req, res, next) {
  //Look into data base for 1. email's exercises
  //Return excercises as JSON obj.

  console.log("Searching for **email's** exercises");
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      //If something goes wrong in DB search... unlikely.
      if (err) return next(err);
      //Found users exercises.
      if (user) {
        console.log("Found **email's** exercises");
        res.send("Hello world");
      }
      console.log("Did not found **email's** exercises");
    }
  );
});

//Push exercises to data base from home page for desired user
router.post("/home", function (req, res, next) {
  console.log("Sending exercise to database");
  //Fill in blanks
});

module.exports = router;

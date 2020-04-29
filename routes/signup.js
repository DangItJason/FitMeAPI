var express = require('express');
var router = express.Router();
// router.get('/', function(req, res, next) {
//     res.send("Hello World from testAPI.js");
// })
var User = require('../models.js');

router.post('/signup', function(req, res, next) {

    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) return next(err);
        //User already exists
        if (user) return next(console.log("User exists: " + user));
        //Add User to Database
        console.log("Creating new user");
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save();
    })
})

module.exports = router;
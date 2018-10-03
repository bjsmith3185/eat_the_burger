
// this will be all the app.gets and router.put 


var express = require("express");
var router = express.Router();
var getBurger = require("../models/burger.js");



router.get("/", function (req, res) {
    getBurger.allBurgers(function (data) {
        console.log("inside burger_controller");
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject)
    });
});

router.post("/burger/update", function(req, res) {
    getBurger.updateBurger(req.body.id, function(result) {
        console.log("inside burger_controller.js, update post");
        res.redirect("/");
    })
})


router.post("/burger/add", function(req, res) {
    getBurger.addBurger(req.body.name, function(result) {
        console.log("inside burger_controller.js, add new burger");
        res.redirect("/");
    })
})


module.exports = router;
//--------------------------





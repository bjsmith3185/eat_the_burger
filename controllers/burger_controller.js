
// this will be all the app.gets and router.put 


var express = require("express");
var router = express.Router();
var getBurger = require("../models/burger.js");



router.get("/", function (req, res) {
    getBurger.allBurgers(function (data) {

        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject)
    });
});

router.post("/burger/update", function(req, res) {
    getBurger.updateBurger(req.body.id, function(result) {

        res.redirect("/");
    })
})


router.post("/burger/add", function(req, res) {
    getBurger.addBurger(req.body.name, function(result) {

        res.redirect("/");
    })
})


module.exports = router;






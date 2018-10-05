
// this will be all the router.get router.post's


var express = require("express");
var router = express.Router();
var getBurger = require("../models/burger.js");



router.get("/", function (req, res) {
    getBurger.allBurgers(function (data) {

        var hbsObject = {
            burgers: data
        };

        res.render("index1", hbsObject)
    });
});

router.post("/burger/update/:id", function(req, res) {
    
    getBurger.updateBurger(req.params.id, function(result) {

    
    // getBurger.updateBurger(req.body.id, function(result) {

        res.redirect("/");
    })
})


router.post("/burger/add", function(req, res) {
    getBurger.addBurger(req.body.name, function(result) {

        res.redirect("/");
    })
})

router.post("/burger/delete", function(req, res) {
    console.log(req.body.name);
    getBurger.deleteBurger(req.body.name, function(result) {

        res.redirect("/");
    })
})


module.exports = router;






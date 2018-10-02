var orm = require("../config/orm.js");


var getBurger = {

    allBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log("burger.js, allBurgers()")
            cb(res);
        })
    },

    updateBurger: function(id, cb) {
        orm.updateOne("burgers", id,  function(res) {
            console.log("burger.js, updateBurger()")
            cb(res);
        })
    },

    addBurger: function(name, cb) {
        orm.insertOne("burgers", name, function(res) {
            console.log("burger.js, addBurger()");
            cb(res);
        })
    }




};

// getBurger.allBurgers();

// orm.selectAll();

// orm.insertOne(newName);

// orm.updateOne(id);


module.exports = getBurger;
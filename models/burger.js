var orm = require("../config/orm.js");


var getBurger = {

    allBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },

    updateBurger: function(id, cb) {
        orm.updateOne("burgers", id,  function(res) {
            cb(res);
        })
    },

    addBurger: function(name, cb) {
        orm.insertOne("burgers", name, function(res) {
            cb(res);
        })
    },

    deleteBurger: function(name, cb) {
        orm.deleteOne("burgers", name, function(res) {
            cb(res);
        })
    }

};


module.exports = getBurger;
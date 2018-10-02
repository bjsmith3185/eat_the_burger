var orm = require("../config/orm.js");


var getBurger = {

    allBurgers: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log("inside burger.js")
            cb(res);
        })
    }

}

// getBurger.allBurgers();

// orm.selectAll();

// orm.insertOne(newName);

// orm.updateOne(id);


module.exports = getBurger;
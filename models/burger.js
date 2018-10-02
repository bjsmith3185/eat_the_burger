var orm = require("./config/orm.js");


var getBurger = {

    allBurgers: function(table) {
        orm.selectAll(table)
    }

}

orm.selectAll();

orm.insertOne(newName);

orm.updateOne(id);



var connection = require("../config/connection.js");



var orm = {
    selectAll: function(table, cb) {
        // var queryString = "SELECT * FROM ?;";
        var queryString = "SELECT * FROM burgers;";
        // connection.query(queryString, [`table = '${table}'`], function(err, result){
            connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log("orm.js page")
            console.log(result);
            cb(result);
        })
        
    },

    insertOne: function(newName) {
        var queryString = `INSERT INTO burgers (burger_name) VALUES ('${newName}'); `;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },

    updateOne: function(id) {
        var queryString = `UPDATE burgers SET devoured = true WHERE id = '${id}'; `;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
}



module.exports = orm;
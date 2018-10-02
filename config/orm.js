var connection = require("../config/connection.js");



var orm = {
    selectAll: function(table, cb) {
        // var queryString = "SELECT * FROM ?;";
        var queryString = `SELECT * FROM ${table};`;
        // connection.query(queryString, [`table = '${table}'`], function(err, result){
            connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log("orm.js selectAll()")
            console.log(result);
            cb(result);
        })
        
    },

    insertOne: function(table, name, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ('${name}'); `;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log("orm.js insertOne()")
            console.log(result);
            cb(result);
          });
    },

    updateOne: function(table, id, cb) {
        var queryString = `UPDATE ${table} SET devoured = true WHERE id = '${id}'; `;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log("orm.js updateOne()")
            console.log(result);
            cb(result);
          });
    },

    
}



module.exports = orm;
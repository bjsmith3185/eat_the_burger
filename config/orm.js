var connection = require("connection.js");



var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ?;";
        connection.query(queryString, [`table = '${table}'`], function(err, result){
            if(err) throw err;
            console.log(result);
            return(result);
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
var connection = require("../config/connection.js");

var orm = {
    
    selectAll: function(bur) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            bur(result);
        });
    },

    insert: function (burger, bur) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            bur(result);
        });
    },

    update: function (id, bur) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            bur(result);
        });
    }
};

module.exports = orm;
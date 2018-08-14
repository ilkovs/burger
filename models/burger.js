var orm = require("../config/orm.js");

var burger = {
    selectAll: function(bur) {
        orm.selectAll(function (result) {
            bur(result);
        });
    },
    insert: function(bur) {
        orm.insert(burger, function (result) {
            bur(result);
        });
    },
    update: function(bur) {
        orm.update([id], function (result) {
            bur(result);
        });
    }
};

module.exports = burger;
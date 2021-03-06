var orm = require('../config/orm')

// =============================================================

//call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    // The variables cols and vals are arrays.

    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
    },

    update: function(objColVals, condition, id , cb) {
        orm.update("burgers", objColVals, condition, id, function(res) {
          cb(res);
        });
    },
    
}

module.exports = burger;

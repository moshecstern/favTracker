// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var coffee = {
  all: function(cb) {
    orm.all("coffees", function(res) {
      console.log("showing res from coffee.js cb function");
      cb(res);
      console.log("showing res from coffee.js cb function");

    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("coffees", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("coffees", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete("coffee", condition, function(res) {
      cb(res)
    })
  }
};

// Export the database functions for the controller (coffeeController.js).
module.exports = coffee;
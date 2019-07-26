var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  
  // console.log('burger', burger);
  burger.selectAll(function (data) {
    console.log(data);
  })
  burger.selectAll(function (data) {

    console.log('data', data);
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log('======', req.body);
  burger.create(
    ["burger_name"
    ], [
      req.body.name,
    ], function (result) {
      // Send back the ID of the new burger
      res.redirect('/');
    });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, function (result) {
    res.redirect('/')
  });
});

// Export routes for server.js to use.
module.exports = router;

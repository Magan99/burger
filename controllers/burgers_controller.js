var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req,res){
	res.redirect("burgers")
});
  

  // console.log('burger', burger);
  router.get("/burgers", function(req,res){
    burger.selectAll(function(data){
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
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

router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burgers.updateOne({
		"devoured": req.body.devoured
	}, condition, function(data){
		res.redirect("/burgers")
	});
});

// Export routes for server.js to use.
module.exports = router;

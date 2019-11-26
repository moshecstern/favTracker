var express = require("express");

var router = express.Router();

// Import the model (coffee.js) to use its database functions.
var coffee = require("../models/coffee.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  coffee.all(function(data) {
    var hbsObject = {
      coffees: data
    };
    console.log(hbsObject);
    console.log("what is this doing")
    res.render("index", hbsObject);
  });
});

router.post("/api/coffee", function(req, res) {
  coffee.create([
    "name", "drank", "type" ,"company", "rating", "caffeinated"
  ], [
    req.body.name, req.body.drank, req.body.type ,req.body.company, req.body.rating, req.body.caffeinated
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/coffee/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  // console.log(req.body);
  coffee.update({
    drank: req.body.drank
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.redirect('/');
    }
  });
});

router.put("/api/rating/:id", function(req, res){
  var condition = "id = " + req.params.id;
  console.log(condition + "this condition is");
  coffee.updateRating({
    rating: req.body.rating
  }, condition, function(result){
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.redirect('/');
    }
  })
})


router.delete("/api/coffee/:id", function (req, res){
  var condition = "id = " + req.params.id;
  console.log("condition " , condition);

  coffee.delete(condition, function(result){
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

// Export routes for server.js to use.
module.exports = router;

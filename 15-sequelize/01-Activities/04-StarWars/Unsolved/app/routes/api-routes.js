// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({
        where: {
          name: req.params.characters
        }
      }).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Chirp.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    // Then send it to the ORM to "save" into the DB.


    Character.create({
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};

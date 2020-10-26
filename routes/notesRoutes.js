// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var fs = require('fs');
var path = require("path");
var db = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  

  // HTML POST request to post notes
  app.post("/api/notes", function(req, res) {
    
  // var new note
  var note ={
      title: req.body.title,
      text: req.body.text
  };
  });

  // DELETE note request
  app.delete("/api/notes/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

  // id variable
  var id = parseInt(req.params.id);
  
  // reads file
  

  // variable all notes in json format

  // new notes filter

  // writes file

  });
  




  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};



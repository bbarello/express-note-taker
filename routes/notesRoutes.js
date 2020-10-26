// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var fs = require('fs');
var path = require("path");

// writes to db.json
fs.writeFile("../db/db.json", process.argv[2], function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  

// read db.json file
fs.readFile("../db/db.json", "utf8", function(err, data) {
    if (err) {
      throw err;
    }



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  


  // HTML POST request to post notes
  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // DELETE note request
  app.delete("/api/notes/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};



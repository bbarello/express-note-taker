// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
const fs = require("fs");
const path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// returns index.html file 
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,"/publickindex.html"));
})

// post request to post new notes
app.post('/api/notes', function(req,res) {
  let postNote = req.body;

  // reads db.json file
  fs.readFile('db.json', (err, data) => {
    let jsonData = JSON.parse(data);
    postNote.id = jsonData.length;
     // pushes notes via json
    jsonData.push(postNote);
    
    // write json to db.json file
    fs.writeFile('db.json', JSON,stringify(jsonData), (err, data) => {
      if (err) throw error;
      // redirect to notes.html file
      res.redirect('/api/notes');
    })
  });
})

// delete notes by id cascade
app.delete('/api/notes/:id', (req,res) => {
  // id in url
  let Id = req.params.id
  fs.readFile('db.json', (err, data) => {
    let jsonData = JSON.parse(data);
    // allows to filter json data
    let filteredData = jsonData.filter(notes => {
      return note.id ! == parseInt(Id);
    })
    // updates id in notes
    let i = 0;
    let updatedId = filteredData.map(note => {
      note.id += i;
      return note;
    })
    // writes to db.json file
    fs.writeFile('db.json', JSON.stringify(updatedId), (err, data) => {
      if(err) throw err;
      res.send('deleted');
    })
  })
})

console.log(apiRoutes);
console.log(notesRoutes);
// apiRoutes(app);
// notesRoutes(app);
// var apiRoutes = require("./routes/apiRoutes")
// console.log(apiRoutes); //=> [Function]
// apiRoutes(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

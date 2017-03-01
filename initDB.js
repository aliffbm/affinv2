
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var Chore   = require('./server/data/chore');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS

var local_database_uri = "mongodb://localhost/chorefinder";
var mongodbURI ="mongodb://heroku_8xg1kbhv:qg32tnvtdgbf4dkpmimhg5gttt@ds113000.mlab.com:13000/heroku_8xg1kbhv";
var database_uri = mongodbURI || local_database_uri;

var database_uri = mongodbURI || local_database_uri;
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data
var chores_json = require('./chores.json');

// Step 2: Remove all existing documents
Chore
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = chores_json.length;
  for(var i=0; i<chores_json.length; i++) {
    var json = chores_json[i];
    var chore = new Chore(json);

    chore.save(function(err, proj) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }
}


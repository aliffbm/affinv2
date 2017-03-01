var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var local_database_uri = "mongodb://localhost/chorefinder";
var mongodbURI ="mongodb://heroku_59frhz9d:60fvr5340tfnqlal841gko6nu3@ds113000.mlab.com:13000/heroku_59frhz9d";
var database_uri = mongodbURI || local_database_uri;
var port = process.env.PORT || 7777;
//controllers
var choreController = require("./controllers/choreController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", choreController);

app.listen(port, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect(database_uri);
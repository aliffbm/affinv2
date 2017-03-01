var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var local_database_uri = "mongodb://localhost/chorefinder";
var database_uri = process.env.MONGOLAB_URI || local_database_uri;
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
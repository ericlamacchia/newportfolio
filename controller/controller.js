var express = require("express");
var path = require("path");
// Initialize Express
var app = express();
app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
module.exports = app;
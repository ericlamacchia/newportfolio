var express = require("express");
var PORT = process.env.PORT || 3000;
// Initialize Express
var app = express();
app.use(express.static("public"));
var routes = require("./controller/controller.js");
app.use("/", routes);
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
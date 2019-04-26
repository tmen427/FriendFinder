// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var path = require("path");

require("./app/routing/htmlRoutes.js")(app);
//require("/Users/tmonnie/Desktop/routes/FriendFinder/app/routing/htmlRoutes.js")(app); 
//require("/Users/tmonnie/Desktop/routes/FriendFinder/app/routing/apiRoutes.js")(app); 
require('./app/routing/apiRoutes.js') (app);
// =============================================================




//app.use(express.static('public'));

//Routes

// Routes
// =============================================================





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

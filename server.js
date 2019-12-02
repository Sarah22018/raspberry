/*this is our server file*/
const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/sarah", function(request, response) {
  response.sendFile(__dirname + "/views/sarah.html");
});

app.get("/mercedes", function(request, response) {
  response.sendFile(__dirname + "/views/mercedes.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT||3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


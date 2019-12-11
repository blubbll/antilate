// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const cors = require("cors");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var corsOptions = {
  origin: function(origin, callback) {
    if (origin) {
      console.log(`Origin: ${origin}`);
      if (origin === "https://translate.googleusercontent.com") {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    } else callback(null, true);
  }
};

app.options("*", cors());
app.use(cors(corsOptions));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

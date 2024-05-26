require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  const ipAddress = req.ip;
  const lang = req.get("Accept-language");
  const browser = req.get("User-agent");

  res.json({ ipaddress: ipAddress, language: lang, software: browser });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

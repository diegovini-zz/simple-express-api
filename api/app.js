var express = require("express");
var request = require("request");
var cors = require("cors");
var app = express();

app.use(cors({ origin: "*" }));

app.get("/:city", function (req, res) {
  const city = req.params.city
  request.get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&units=metric&q=${city}`,
    function (error, response, body) {
      var body = JSON.parse(body);
      if (body.cod === "404") {
        res.status(404).json({ error: "City not found" });
      } else {

        res.status(200).json(body);
      }
    });

});

app.listen(3000, function () {
})
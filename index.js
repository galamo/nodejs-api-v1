console.log("server starts...");
require("dotenv").config();
const express = require("express");
const cars = require("./mok/data");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/cars/:model", (req, res, next) => {
  const model = req.params.model;
  let result = cars.filter(car => {
    return car.model == model;
  });
  if (result.length > 0) {
    res.json(result);
  } else {
    res.status(404).send("model not found!");
  }
});

app.get(/car*/, (req, res, next) => {
  res.status(200).json(cars);
});

app.get("/country/:capital", (req, res, next) => {
  const capital = req.params.capital;
  axios
    .get(`https://restcountries.eu/rest/v2/capital/${capital}`)
    .then(result => {
      res.json(result.data);
    });
});

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`api is running and listening to port ${process.env.PORT}`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// require database connection
const dbConnect = require("./db/dbConnect");

//require trip service
const { saveTrips, getTrips } = require("./service/trips");
const login = require("./service/login");
const auth = require("./service/auth");

// execute database connection
dbConnect();

// body parser configuration
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/trips", auth, async (request, response, next) => {
  try {
    const page = request.query.page | 0;
    const results = await getTrips({ page });
    response.send(results);
  } catch (error) {
    response.status(500).send("Internal server Error");
  }
});

app.post("/trips", async (request, response, next) => {
  try {
    const tripsInfo = request.body;
    await saveTrips(tripsInfo);
    response.send("success");
  } catch (error) {
    console.log(error);
    response.status(500).send("Internal server Error");
  }
});

app.post("/login", async (request, response, next) => {
  try {
    const result = await login(request.body);
    response.send(result);
  } catch (error) {
    console.log(error);
    response.status(401).send("unauthorized");
  }
});

app.get("/ping", (request, response, next) => {
  response.json({ status: "ok" });
});

module.exports = app;

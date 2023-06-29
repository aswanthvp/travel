const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const fs = require('fs');

// require database connection
const dbConnect = require("./db/dbConnect");

// execute database connection
dbConnect();

// body parser configuration
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("Build"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/trips",(request, response, next)=>{
})

app.post("/trips",(request, response, next)=>{

});

app.get("/ping",(request, response, next)=>{
    response.json({status:"ok"});
    // next();
})

app.post("/login",(request, response, next)=>{
    
})

app.get("*",(request, response)=>{
    console.log(__dirname)
    console.log(path.join(__dirname, "build", "index.html"));
    console.log(path.join(__dirname, "../build", "index.html"));

    response.sendFile("../build/index.html")
});


module.exports = app;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

// require database connection
const dbConnect = require("./db/dbConnect");

// execute database connection
dbConnect();

// body parser configuration
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("Build"));
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, "../build");

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
    console.log(path.join(publicPath, "index.html"));
    response.sendFile(path.join(publicPath,"index.html"))
});


module.exports = app;

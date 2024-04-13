const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

// Middleware to Parse Json Body

app.use(express.json());

// Importing Routes

const todoBlog = require("./routes/todoBlog");

// Mounting 

app.use("/api/v1", todoBlog);

// Connect to Database

const dbConnect = require("./config/database");
dbConnect();


// start Listening

app.listen(port, ()=>{
    console.log(`successfully Listening at ${port}`);
});

// Default Route

app.get("/",(req,res)=>{
    res.send(`<h1>This is blogging site</h1>`);
})





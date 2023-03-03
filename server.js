const express = require("express");
// const mongoose = require('mongoose'); //why 
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to e-khdem" });
});

app.listen(3000, ()=> {
    console.log("lstening to port 3000")
});


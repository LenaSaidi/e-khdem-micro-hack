 require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();



const employeeRoute = require('./app/routes/employeeRoute');


app.use(express.json());


const dbURI = 'mongodb+srv://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome to GDG application." });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, (err)=> console.log(`Server listening on PORT ${process.env.PORT}...`));
  })
  .catch((err) => console.log(err));



app.use(employeeRoute);


 require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();



const employeeRoute = require('./app/routes/employeeRoute');


app.use(express.json());


const dbURI = 'mongodb+srv://saidilena:lena123@e-khdem.dsjn9yi.mongodb.net/?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome e-khdem" });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, ()=> {
      return console.log(`Server listening on PORT ${process.env.PORT}...`);
    });
  })
  .catch((err) => console.log(err));



app.use(employeeRoute);


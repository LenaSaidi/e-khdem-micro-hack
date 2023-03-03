const express = require("express");
const mongoose = require('mongoose');
const app = express();

const employeeRoute = require('./app/routes/employeeRoutes');

const dbURI = 'mongodb+mongodb+srv://saidilena:lena123@e-khdem.dsjn9yi.mongodb.net/?retryWrites=true&w=majority://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';

app.get("/", (req, res) => {
    res.json({ message: "Welcome to e-khdem" });
});


mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, (err)=> console.log(`Server listening on PORT ${process.env.PORT}...`));
  })
  .catch((err) => console.log(err));


  app.use(employeeRoute);

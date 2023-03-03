const mongoose = require('mongoose');
 
const ConnectDB=()=>{
  mongoose.connect("mongodb+srv://saidilena:lena123@e-khdem.dsjn9yi.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    console.log("db connection established");
  })
  .catch( err => {
    console.log(err);
  }); 

}
module.exports=ConnectDB
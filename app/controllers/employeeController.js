const Employee = require("../models/Employee");
// const Rank = require("../models/Rank");
// const jwt = require('jsonwebtoken');


//get all users from 

module.exports.getAllEmployees= async (req,res)=>{
    try{
        const allEmployees= await Employee.find();
        console.log('LOGS: Getting all users');
        res.status(200).send(allEmployees);
    }catch(err){
        console.log("Getting all users failed"+err);
        res.status(500).send("Error");
    }
}

//get one of the employees by it's id
//user
module.exports.getEmployeeById= async (req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);
        if(employee){
            res.status(200).send(employee);
        }else{
            res.status(404).send("Not found");
        }
        console.log(`LOGS: Getting Employee with id = ${req.params.id}`);
    }catch(err){
        console.log("Getting the Employee with id failed"+err);
        res.status(500).send("Error");
    }
}


//adding Employee

module.exports.addEmployee=async(req,res,next)=>{
    try{
        req.body.owner=mongoose.Types.ObjectId(req.decodedToken.id);
        await Employee.create(req.body);
        console.log("LOGS: Adding Employee");
        res.status(200).send("SUCCESS: Creation of Employee succeeded");
    }catch(err){
        console.log("creation of Employee failed "+err.message);
        res.status(500).send("Error");
    }
}
// update employee


module.exports.updateEmployee = async (req, res) =>{
    _id = req.params.id;
    try{
        const employee=await Employee.findOneAndUpdate({_id}, req.body, {new: true});
        if(user){    
            res.status(200).json(employee);

        }else{
            res.status(404).json({message: "Employee not found"});
        }

    }catch(err){
        console.log("Employee update failed");
        res.status(500).json({message: err.message});
    }
}

//delete employee
module.exports.deleteEmployee=async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id_);
        if(employee){
            await Employee.deleteOne({_id:req.params.id_});
            console.log(`LOGS: suppression succeded of Employee with id= ${req.params.id_}`);
            res.status(200).send("SUCCESS: suppression succeded of Employee");
        }else{
            res.status(401).send("Employee not found");
        }
    }catch(err){
        console.log("suppression of Employee failed\n"+err);
        res.status(500).send("Error");
    }
}
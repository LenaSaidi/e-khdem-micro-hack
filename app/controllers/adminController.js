const Admin = require("../models/Admin");
// const mongoose = require('mongoose');
// const Rank = require("../models/Rank");
// const jwt = require('jsonwebtoken');


//get all users from 

module.exports.getAllAdmins= async (req,res)=>{
    try{
        const allAdmins= await Admin.find();
        console.log('LOGS: Getting all users');
        res.status(200).send(allAdmins);
    }catch(err){
        console.log("Getting all users failed"+err);
        res.status(500).send("Error");
    }
}

//get one of the admins by it's id
//user
module.exports.getAdminById= async (req,res)=>{
    try{
        const admin = await Admin.findById(req.params.id);
        if(admin){
            res.status(200).send(admin);
        }else{
            res.status(404).send("Not found");
        }
        console.log(`LOGS: Getting Admin with id = ${req.params.id}`);
    }catch(err){
        console.log("Getting the Admin with id failed"+err);
        res.status(500).send("Error");
    }
}


//adding Admin

module.exports.addAdmin = async (req, res) =>{
    try{
        //creat a new user
        const admin = await Admin.create(req.body);
        res.status(200).json(admin);

    }catch(err){

        console.log("Creation failed");
        res.status(500).json({message: err.message});
    }

}


module.exports.updateAdmin = async (req, res) =>{
    _id = req.params.id;
    try{
        const admin=await Admin.findOneAndUpdate({_id}, req.body, {new: true});
        if(admin){    
            res.status(200).json(admin);

        }else{
            res.status(404).json({message: "Admin not found"});
        }

    }catch(err){
        console.log("Admin update failed");
        res.status(500).json({message: err.message});
    }
}

//delete admin
module.exports.deleteAdmin=async(req,res)=>{
    try{
        const admin=await Admin.findById(req.params.id);
        if(admin){
            await Admin.deleteOne({_id:req.params.id});
            console.log(`LOGS: suppression succeded of Admin with id= ${req.params.id}`);
            res.status(200).send("SUCCESS: suppression succeded of Admin");
        }else{
            res.status(401).send("Admin not found");
        }
    }catch(err){
        console.log("suppression of Admin failed\n"+err);
        res.status(500).send("Error");
    }
}
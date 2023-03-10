const Admin = require("../models/Admin");
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//get all users from 

module.exports.getAllAdmins= async (req,res)=>{
    
    try{
        const allAdmins= await Admin.find();
        console.log('LOGS: Getting all users');
        res.status(200).json(allAdmins);
    }catch(err){

        console.log("Getting all users failed"+err);
        res.status(500).json("Error");
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
        res.status(500).json({error : err.message});
    }
}


//adding Admin

module.exports.addAdmin = async (req, res) =>{
    try{
        console.log('req.body');

        let {email , password} = req.body;
   let admin =  await   Admin.findOne({email})
   if (admin) {

    return res.status(400).json({msg: 'User already exists'})   
    }
    let hachedPassword = await bcrypt.hash(password, 10)
    admin = new Admin({
        email,
        hachedPassword,
        ...req.body
    }),
        await admin.save();
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

module.exports.login_get = async (req, res) => {
    res.status(200).send("this is the login page");
}


module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    const maxAge = 1000 * 60 * 60 * 24;

    try {
        const user = await Admin.login(email, password);

        if(user){
            const token = jwt.sign({ id: user._id, role: user.role }, "EKHDEEEM", {expiresIn: maxAge});
           
            res.cookie('jwt', token, { httpOnly: true, maxAge});
            res.status(200).json({ id: user._id });

        }else{
            res.status(400).json({message: 'error'});
        }
    } 
    catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({ errors });
        res.status(400).json({message: err.message});
    }
  
}


module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

const User = require("../models/User");
const Rank = require("../models/Rank");
const jwt = require('jsonwebtoken');


module.exports.getUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user = await User.findById(_id)
            .populate('notifications')
            .populate({path: 'contributions.activityID', select: 'name'})
            .populate('rank')

        if(user){
            res.status(200).send(user);
        
        }else{
            res.status(404).json({message: "User not found"});
        }
        
    }catch(err){
        console.log("fetch failed");
        res.status(500).json({message: err.message});
    }
}

module.exports.updateProfile = async (req, res)=>{
    try {
        _id = req.params.id;
        
        const user = await User.findOneAndUpdate({_id}, req.body, {new: true});

        if(user){
            res.status(200).json(user);

        }else{
            res.status(400).json({message: 'User not found'})
        }

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports.login_get = async (req, res) => {
    res.status(200).send("this is the login page");
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    const maxAge = 1000 * 60 * 60 * 24;

    try {
        const user = await User.login(email, password);

        if(user.status === 'banned'){
            res.status(400).json({message: 'User banned'});

        }else{
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin, role: user.role }, "GDG for once, GDG forever!", {expiresIn: maxAge});
           
            res.cookie('jwt', token, { httpOnly: true, maxAge});
            res.status(200).json({ id: user._id, isAdmin: user.isAdmin, role: user.role });
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
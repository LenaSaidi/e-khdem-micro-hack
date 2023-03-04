const Employee = require('../models/Admin');
const { Router } = require("express");
const router = Router();

//get ranks sorted descendantly by "total points" with the names of their respective owners
    
router.get('/ranking' ,(req, res) => {
    Employee.find().sort({createdAt: -1})
    .then((result) => {
        result.status(200).send(result);
    })
    .catch((err) => {
        res.status(400).send({
            err: err.message
        })
    })
})

module.exports = router;
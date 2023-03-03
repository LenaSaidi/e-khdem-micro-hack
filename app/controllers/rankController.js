const Rank = require('../models/Rank');

module.exports.getTopTen = async (req, res) => {
    try {
        //get ranks sorted descendantly by "total points" (then by "general points") with the names of their respective owners
        const ranks = await Rank.find({}, {history: 0 })
            .sort({totalAddedPoints: -1, generalPoints: -1})
            .limit(10)
            .populate('owner', 'firstName lastName');
        
        res.status(200).json(ranks);

    } catch (error) {
        console.log("Getting Top Ten failed");
        res.status(500).json({message: error.message});
    }
};
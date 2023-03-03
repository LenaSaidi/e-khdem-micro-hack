const { Router } = require("express");
const rankController = require('../controllers/rankController');

const router = Router();

router.get('/ranks/top-ten' , rankController.getTopTen);

module.exports = router;

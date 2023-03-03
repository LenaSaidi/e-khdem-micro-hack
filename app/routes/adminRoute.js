const { Router } = require('express');
const adminController = require('../controllers/adminController');
const {requireAuth} = require('../middleware/userMiddleware');
const {requireAdmin} = require('../middleware/adminMiddleware');

const router = Router();

router.post('/user/create', requireAuth, requireAdmin ,adminController.insertUser);
router.put('/user/update-credintials/:id', requireAuth, requireAdmin ,adminController.updateCredintials); //email || password for users
router.delete('/user/delete/:id', requireAuth, requireAdmin ,adminController.deleteUser);

router.put('/user/ban/:id', requireAuth, requireAdmin ,adminController.banUser);
router.put('/user/unban/:id', requireAuth, requireAdmin ,adminController.unbanUser);

router.put('/user/promote/:id', requireAuth, requireAdmin ,adminController.promoteUser);
router.put('/user/demote/:id', requireAuth, requireAdmin ,adminController.demoteUser);



module.exports = router;
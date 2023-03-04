const express = require('express');
const {
    getAdminById,
    addAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmins



} = require('../controllers/adminController');
const {requireAuth} = require('../Middlware/adminMiddleware');


const router = express.Router();
router.get('/all', getAllAdmins);

router.post('/add', addAdmin)
router.get('/:id', getAdminById)
router.put('/:id',requireAuth, updateAdmin)
router.delete('/:id',requireAuth, deleteAdmin);

router.get('/login', userController.login_get);
router.post('/login', userController.login_post);
router.get('/logout-get', userController.logout_get);


module.exports = router; 
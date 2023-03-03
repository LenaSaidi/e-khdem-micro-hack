const { Router } = require('express');
const adminController = require('../controllers/adminController');
const {requireAuth} = require('../middleware/adminMiddleware');


const router = Router();

router.get('/admins',requireAuth, adminController.getAllEmployees);
router.get('/admins/get/:id',requireAuth, adminController.getEmployeeById);
router.post('/admins/create',requireAuth, adminController.addEmployee);
router.put('/admins/update/:id',requireAuth, adminController.updateEmployee);
router.delete('/admins/delete/:id',requireAuth, adminController.deleteEmployee);


router.get('/user/login', userController.login_get);
router.post('/user/login', userController.login_post);
router.get('/user/logout-get', userController.logout_get);



// router.get('/user/testUser', requireAuth, requireAdmin ,(req, res) => {
//     res.json({message: 'test done'});
// });

module.exports = router; 
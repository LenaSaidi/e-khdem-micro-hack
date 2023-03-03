const { Router } = require('express');
const employeeController = require('../controllers/employeeController');
// const {requireManager} = require('../middleware/adminMiddleware');

const router = Router();

router.get('/employees',requireAuth, employeeController.getAllEmployees);
router.get('/employees/get/:id',requireAuth, employeeController.getEmployeeById);
router.post('/employees/create',requireAuth, employeeController.addEmployee);
router.put('/employees/update/:id',requireAuth, employeeController.updateEmployee);
router.delete('/employees/delete/:id',requireAuth, employeeController.deleteEmployee);

module.exports = router; 
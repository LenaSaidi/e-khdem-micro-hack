const { Router } = require('express');
const employeeController = require('../controllers/employeeController');
// const {requireManager} = require('../middleware/adminMiddleware');

const router = Router();

router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/get/:id', employeeController.getEmployeeById);
router.post('/employees/create', employeeController.addEmployee);
router.put('/employees/update/:id', employeeController.updateEmployee);
router.delete('/employees/delete/:id', employeeController.deleteEmployee);

module.exports = router;
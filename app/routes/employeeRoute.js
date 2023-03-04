const { Router } = require('express');
const employeeController = require('../controllers/employeeController');
const router = Router();

router.get('/all', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.post('/add', employeeController.addEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router; 
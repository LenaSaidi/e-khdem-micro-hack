const { Router } = require('express');
const employeeController = require('../controllers/activitiesController');
// const {requireManager} = require('../middleware/adminMiddleware');

const router = Router();

router.get('/employees', activitiesController.getAllEmployees);
router.get('/employees/get/:id', activitiesController.getEmployeeById);
router.post('/employees/create', activitiesController.addEmployee);
router.put('/employees/update/:id', activitiesController.put);
router.delete('/employees/delete/:id', activitiesController.deleteEmployee);

module.exports = router;
const router = require('express').Router()
const employeeController = require('../controllers/employee')

router.post('/employee',employeeController.employeeEnrollment)

router.get('/all',employeeController.getAllData)

router.get('/salary',employeeController.dataBySalary)

router.get('/exp',employeeController.dataByExp)

router.get('/grad',employeeController.dataByGrad)

router.put('/salary',employeeController.updateBySalary)

router.delete('/employee',employeeController.deleteEmployee)




module.exports = router
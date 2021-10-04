const { Router } = require('express')
const GradesController = require('../controllers/GradesController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/grades', MiddlewareController.validatingAuth, GradesController.getAllGrades)
router.get('/grades/:id', MiddlewareController.validatingAuth, GradesController.getOneGrade)
router.get('/grades/evaluations/:id', MiddlewareController.validatingAuth, GradesController.getGradesByEvaluation)
router.get('/grades/people/:id', MiddlewareController.validatingAuth, GradesController.getGradesByPerson)
router.post('/grades', MiddlewareController.validatingAuth, GradesController.createGrade)
router.put('/grades/:id', MiddlewareController.validatingAuth, GradesController.updateGrade)
router.delete('/grades/:id', MiddlewareController.validatingAuth, GradesController.removeGrade)

module.exports = router
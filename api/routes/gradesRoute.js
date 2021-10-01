const { Router } = require('express')
const GradesController = require('../controllers/GradesController')

const router = Router()

router.get('/grades', GradesController.getAllGrades)
router.get('/grades/:id', GradesController.getOneGrade)
router.get('/grades/evaluations/:id', GradesController.getGradesByEvaluation)
router.get('/grades/people/:id', GradesController.getGradesByPerson)
router.post('/grades', GradesController.createGrade)
router.put('/grades/:id', GradesController.updateGrade)
router.delete('/grades/:id', GradesController.removeGrade)

module.exports = router
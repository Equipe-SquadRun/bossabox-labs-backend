const { Router } = require('express')
const EvaluationsController = require('../controllers/EvaluationsController')

const router = Router()

router.get('/evaluations', EvaluationsController.getAllEvaluations)
router.get('/evaluations/:id', EvaluationsController.getOneEvaluation)
router.get('/evaluations/subjects/:id', EvaluationsController.getEvaluationsBySubject)
router.post('/evaluations', EvaluationsController.createEvaluation)
router.put('/evaluations/:id', EvaluationsController.updateEvaluation)
router.delete('/evaluations/:id', EvaluationsController.removeEvaluation)

module.exports = router
const { Router } = require('express')
const EvaluationsController = require('../controllers/EvaluationsController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/evaluations', MiddlewareController.validatingAuth, EvaluationsController.getAllEvaluations)
router.get('/evaluations/:id', MiddlewareController.validatingAuth, EvaluationsController.getOneEvaluation)
router.get('/evaluations/subjects/:id', MiddlewareController.validatingAuth, EvaluationsController.getEvaluationsBySubject)
router.post('/evaluations', MiddlewareController.validatingAuth, EvaluationsController.createEvaluation)
router.put('/evaluations/:id', MiddlewareController.validatingAuth, EvaluationsController.updateEvaluation)
router.delete('/evaluations/:id', MiddlewareController.validatingAuth, EvaluationsController.removeEvaluation)

module.exports = router
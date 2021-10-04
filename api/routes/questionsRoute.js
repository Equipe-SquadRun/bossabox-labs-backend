const { Router } = require('express')
const QuestionsController = require('../controllers/QuestionsController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/questions', MiddlewareController.validatingAuth, QuestionsController.getAllQuestions)
router.get('/questions/:id', MiddlewareController.validatingAuth, QuestionsController.getOneQuestion)
router.get('/questions/evaluations/:id', MiddlewareController.validatingAuth, QuestionsController.getQuestionsByEvaluation)
router.post('/questions', MiddlewareController.validatingAuth, QuestionsController.createQuestion)
router.put('/questions/:id', MiddlewareController.validatingAuth, QuestionsController.updateQuestion)
router.delete('/questions/:id', MiddlewareController.validatingAuth, QuestionsController.removeQuestion)

module.exports = router
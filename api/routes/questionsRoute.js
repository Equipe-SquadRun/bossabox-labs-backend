const { Router } = require('express')
const QuestionsController = require('../controllers/QuestionsController')

const router = Router()

router.get('/questions', QuestionsController.getAllQuestions)
router.get('/questions/:id', QuestionsController.getOneQuestion)
router.get('/questions/evaluations/:id', QuestionsController.getQuestionsByEvaluation)
router.post('/questions', QuestionsController.createQuestion)
router.put('/questions/:id', QuestionsController.updateQuestion)
router.delete('/questions/:id', QuestionsController.removeQuestion)

module.exports = router
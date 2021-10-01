const { Router } = require('express')
const AnswersController = require('../controllers/AnswersController')

const router = Router()

router.get('/answers', AnswersController.getAllAnswers)
router.get('/answers/:id', AnswersController.getOneAnswers)
router.get('/answers/questions/:id', AnswersController.getAnswersByQuestion)
router.post('/answers', AnswersController.createAnswer)
router.put('/answers/:id', AnswersController.updateAnswer)
router.delete('/answers/:id', AnswersController.removeAnswer)

module.exports = router
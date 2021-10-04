const { Router } = require('express')
const AnswersController = require('../controllers/AnswersController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/answers', MiddlewareController.validatingAuth, AnswersController.getAllAnswers)
router.get('/answers/:id', MiddlewareController.validatingAuth, AnswersController.getOneAnswers)
router.get('/answers/questions/:id', MiddlewareController.validatingAuth, AnswersController.getAnswersByQuestion)
router.post('/answers', MiddlewareController.validatingAuth, AnswersController.createAnswer)
router.put('/answers/:id', MiddlewareController.validatingAuth, AnswersController.updateAnswer)
router.delete('/answers/:id', MiddlewareController.validatingAuth, AnswersController.removeAnswer)

module.exports = router
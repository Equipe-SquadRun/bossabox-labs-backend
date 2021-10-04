const { Router } = require('express')
const SubjectsController = require('../controllers/SubjectsController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/subjects', MiddlewareController.validatingAuth, SubjectsController.getAllSubjects)
router.get('/subjects/:id', MiddlewareController.validatingAuth, SubjectsController.getOneSubject)
router.get('/subjects/companies/:id', MiddlewareController.validatingAuth, SubjectsController.getSubjectsByCompany)
router.post('/subjects', MiddlewareController.validatingAuth, SubjectsController.createSubject)
router.put('/subjects/:id', MiddlewareController.validatingAuth, SubjectsController.updateSubject)
router.delete('/subjects/:id', MiddlewareController.validatingAuth, SubjectsController.removeSubject)

module.exports = router
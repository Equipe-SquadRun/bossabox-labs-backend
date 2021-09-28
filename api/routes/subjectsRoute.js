const { Router } = require('express')
const SubjectsController = require('../controllers/SubjectsController')

const router = Router()

router.get('/subjects', SubjectsController.getAllSubjects)
router.get('/subjects/:id', SubjectsController.getOneSubject)
router.get('/subjects/companies/:id', SubjectsController.getSubjectsByCompany)
router.post('/subjects', SubjectsController.createSubject)
router.put('/subjects/:id', SubjectsController.updateSubject)
router.delete('/subjects/:id', SubjectsController.removeSubject)

module.exports = router
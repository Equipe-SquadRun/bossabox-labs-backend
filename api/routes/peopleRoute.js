const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.getAllPeople)
router.get('/people/:id', PeopleController.getOnePerson)
router.get('/people/user/:id', PeopleController.getOnePersonUser)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.removePerson)

module.exports = router
const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const MiddlewareController = require('../controllers/MiddlewareController')
const passport = require('passport')

const router = Router()

router.get('/people', MiddlewareController.validatingAuth, PeopleController.getAllPeople)
router.get('/people/:id', MiddlewareController.validatingAuth, PeopleController.getOnePerson)
router.get('/people/user/:id', MiddlewareController.validatingAuth, PeopleController.getOnePersonUser)
router.post('/people', MiddlewareController.validatingAuth, PeopleController.createPerson)
router.put('/people/:id', MiddlewareController.validatingAuth, PeopleController.updatePerson)
router.delete('/people/:id', MiddlewareController.validatingAuth, PeopleController.removePerson)

module.exports = router
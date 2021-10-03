const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const MiddlewareController = require('../controllers/MiddlewareController')
const passport = require('passport')

const router = Router()

router.get('/users', MiddlewareController.validatingAuth, UsersController.getAllUsers)
router.get('/users/:id', MiddlewareController.validatingAuth, UsersController.getOneUser)
router.post('/users', UsersController.createUser)
router.put('/users/:id', UsersController.updateUser)
router.delete('/users/:id', MiddlewareController.validatingAuth, UsersController.removeUser)

router.get('/roles', MiddlewareController.validatingAuth, UsersController.getAllRoles)
router.post('/roles', MiddlewareController.validatingAuth, UsersController.createRole)
router.delete('/roles/:id', MiddlewareController.validatingAuth, UsersController.removeRole)

router.get('/permissions/:id', MiddlewareController.validatingAuth, UsersController.getPermissions)
router.post('/permissions', MiddlewareController.validatingAuth, UsersController.setPermissions)
router.post('/users/login', UsersController.loginAuthentication)
router.post('/users/logoff', UsersController.logoffAuthentication)

module.exports = router
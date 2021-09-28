const { Router } = require('express')
const UsersController = require('../controllers/UsersController')
const passport = require('passport')

const router = Router()

router.get('/users', UsersController.getAllUsers)
router.get('/users/:id', UsersController.getOneUser)
router.post('/users', UsersController.createUser)
router.put('/users/:id', UsersController.updateUser)
router.delete('/users/:id', UsersController.removeUser)

router.get('/roles', UsersController.getAllRoles)
router.post('/roles', UsersController.createRole)
router.delete('/roles/:id', UsersController.removeRole)

router.get('/permissions/:id', UsersController.getPermissions)
router.post('/permissions', UsersController.setPermissions)
//router.post('/usuario/login', passport.authenticate('local', { session: false }), UsuariosController.autenticar)

module.exports = router
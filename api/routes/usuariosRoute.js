const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const passport = require('passport')

const router = Router()

router.get('/users', UsuariosController.getAllUsers)
router.get('/usuario/:id', UsuariosController.getOneUser)
router.post('/usuario', UsuariosController.createUser)
router.put('/usuario/:id', UsuariosController.updateUser)
//router.delete('/usuario/:id', UsuariosController.)
//router.post('/usuario/login', passport.authenticate('local', { session: false }), UsuariosController.autenticar)

module.exports = router
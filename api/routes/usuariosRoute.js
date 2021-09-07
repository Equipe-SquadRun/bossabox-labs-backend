const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/usuario', UsuariosController.pegarTodosUsuarios)
router.get('/usuario/:id', UsuariosController.pegarUsuario)
router.post('/usuario', UsuariosController.criarUsuario)
router.put('/usuario/:id', UsuariosController.atualizarUsuario)

module.exports = router
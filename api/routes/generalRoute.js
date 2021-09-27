const { Router } = require('express')
const GeralController = require('../controllers/GeralController')

const router = Router()

router.get('/', GeralController.retornaOk)

module.exports = router
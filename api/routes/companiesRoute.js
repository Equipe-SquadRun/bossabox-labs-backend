const { Router } = require('express')
const CompaniesController = require('../controllers/CompaniesController')
const MiddlewareController = require('../controllers/MiddlewareController')

const router = Router()

router.get('/companies', MiddlewareController.validatingAuth, CompaniesController.getAllCompanies)
router.get('/companies/:id', MiddlewareController.validatingAuth, CompaniesController.getOneCompany)
router.get('/companies/user/:id', MiddlewareController.validatingAuth, CompaniesController.getOneCompanyUser)
router.post('/companies', MiddlewareController.validatingAuth, CompaniesController.createCompany)
router.put('/companies/:id', MiddlewareController.validatingAuth, CompaniesController.updateCompany)
router.delete('/companies/:id', MiddlewareController.validatingAuth, CompaniesController.removeCompany)

module.exports = router
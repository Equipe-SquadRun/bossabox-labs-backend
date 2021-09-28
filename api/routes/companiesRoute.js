const { Router } = require('express')
const CompaniesController = require('../controllers/CompaniesController')

const router = Router()

router.get('/companies', CompaniesController.getAllCompanies)
router.get('/companies/:id', CompaniesController.getOneCompany)
router.get('/companies/user/:id', CompaniesController.getOneCompanyUser)
router.post('/companies', CompaniesController.createCompany)
router.put('/companies/:id', CompaniesController.updateCompany)
router.delete('/companies/:id', CompaniesController.removeCompany)

module.exports = router
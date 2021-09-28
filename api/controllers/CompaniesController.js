const { Sequelize } = require('../models')
const database = require('../models')

class CompaniesController {

    static async getAllCompanies(request, response, next){
        try {
            const companies = await database.companies.findAll()            
            return response.status(200).json(companies)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneCompany(request, response, next){
        const { id } = request.params
        try {
            const company = await database.companies.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(company)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneCompanyUser(request, response, next){
        const { id } = request.params
        try {
            const company = await database.companies.findOne({
                where: {
                    id: Number(id)
                },
                include: [database.users]
            })             
            return response.status(200).json(company)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createCompany(request, response, next){
        const bodyData = request.body        
        try {
            const newCompanyCreated = await database.companies.create(bodyData)            
            return response.status(201).json(newCompanyCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateCompany(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.companies.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedCompany = await database.companies.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedCompany)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeCompany(request, response, next){
        const { id } = request.params
        try {            
            await database.companies.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Empresa com id ${ id } removido com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = CompaniesController
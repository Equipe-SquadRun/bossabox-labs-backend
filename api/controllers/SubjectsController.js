const { Sequelize } = require('../models')
const database = require('../models')

class SubjectsController {

    static async getAllSubjects(request, response, next){
        try {
            const subjects = await database.subjects.findAll()            
            return response.status(200).json(subjects)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneSubject(request, response, next){
        const { id } = request.params
        try {
            const subject = await database.subjects.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(subject)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getSubjectsByCompany(request, response, next){
        const { id } = request.params
        try {
            const subjects = await database.subjects.findAll({
                where: {
                    companies_id: Number(id)
                },
                include: [database.companies]
            })             
            return response.status(200).json(subjects)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createSubject(request, response, next){
        const bodyData = request.body        
        try {
            const newSubjectCreated = await database.subjects.create(bodyData)            
            return response.status(201).json(newSubjectCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateSubject(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.subjects.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedSubject = await database.subjects.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedSubject)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeSubject(request, response, next){
        const { id } = request.params
        try {            
            await database.subjects.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Matéria com id ${ id } removida com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = SubjectsController
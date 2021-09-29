const { Sequelize } = require('../models')
const database = require('../models')

class EvaluationsController {

    static async getAllEvaluations(request, response, next){
        try {
            const evaluations = await database.evaluations.findAll()            
            return response.status(200).json(evaluations)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneEvaluation(request, response, next){
        const { id } = request.params
        try {
            const evaluation = await database.evaluations.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(evaluation)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getEvaluationsBySubject(request, response, next){
        const { id } = request.params
        try {
            const evaluations = await database.evaluations.findAll({
                where: {
                    subjects_id: Number(id)
                },
                include: [database.subjects]
            })             
            return response.status(200).json(evaluations)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getEvaluationsByPerson(request, response, next){
        const { id } = request.params
        try {
            const evaluations = await database.evaluations.findAll({
                where: {
                    people_id: Number(id)
                },
                include: [database.people]
            })             
            return response.status(200).json(evaluations)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createEvaluation(request, response, next){
        const bodyData = request.body        
        try {
            const newEvaluationCreated = await database.evaluations.create(bodyData)            
            return response.status(201).json(newEvaluationCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateEvaluation(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.evaluations.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedEvaluation = await database.evaluations.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedEvaluation)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeEvaluation(request, response, next){
        const { id } = request.params
        try {            
            await database.evaluations.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Avaliação com id ${ id } removida com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = EvaluationsController
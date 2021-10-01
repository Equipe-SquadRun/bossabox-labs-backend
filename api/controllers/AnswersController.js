const { Sequelize } = require('../models')
const database = require('../models')

class AnswersController {

    static async getAllAnswers(request, response, next){
        try {
            const answers = await database.answers.findAll()            
            return response.status(200).json(answers)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneAnswers(request, response, next){
        const { id } = request.params
        try {
            const answers = await database.answers.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(answers)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getAnswersByQuestion(request, response, next){
        const { id } = request.params
        try {
            const answers = await database.answers.findAll({
                where: {
                    questions_id: Number(id)
                },
                include: [database.questions]
            })             
            return response.status(200).json(answers)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createAnswer(request, response, next){
        const bodyData = request.body        
        try {
            const newAnswerCreated = await database.answers.create(bodyData)            
            return response.status(201).json(newAnswerCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateAnswer(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.answers.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedAnswer = await database.answers.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedAnswer)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeAnswer(request, response, next){
        const { id } = request.params
        try {            
            await database.answers.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Resposta com id ${ id } removida com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = AnswersController
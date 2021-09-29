const { Sequelize } = require('../models')
const database = require('../models')

class QuestionsController {

    static async getAllQuestions(request, response, next){
        try {
            const questions = await database.questions.findAll()            
            return response.status(200).json(questions)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneQuestion(request, response, next){
        const { id } = request.params
        try {
            const question = await database.questions.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(question)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getQuestionsByEvaluation(request, response, next){
        const { id } = request.params
        try {
            const questions = await database.questions.findAll({
                where: {
                    evaluations_id: Number(id)
                },
                include: [database.evaluations]
            })             
            return response.status(200).json(questions)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createQuestion(request, response, next){
        const bodyData = request.body        
        try {
            const newQuestionCreated = await database.questions.create(bodyData)            
            return response.status(201).json(newQuestionCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateQuestion(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.questions.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedQuestion = await database.questions.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedQuestion)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeQuestion(request, response, next){
        const { id } = request.params
        try {            
            await database.questions.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Questão com id ${ id } removida com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = QuestionsController
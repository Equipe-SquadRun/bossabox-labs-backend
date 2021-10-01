const { Sequelize } = require('../models')
const database = require('../models')

class GradesController {

    static async getAllGrades(request, response, next){
        try {
            const grades = await database.grades.findAll()            
            return response.status(200).json(grades)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneGrade(request, response, next){
        const { id } = request.params
        try {
            const grade = await database.grades.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(grade)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getGradesByEvaluation(request, response, next){
        const { id } = request.params
        try {
            const grades = await database.grades.findAll({
                where: {
                    evaluations_id: Number(id)
                },
                include: [database.evaluations, database.people]
            })             
            return response.status(200).json(grades)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getGradesByPerson(request, response, next){
        const { id } = request.params
        try {
            const grades = await database.grades.findAll({
                where: {
                    people_id: Number(id)
                },
                include: [database.people]
            })             
            return response.status(200).json(grades)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createGrade(request, response, next){
        const bodyData = request.body        
        try {
            const newGradeCreated = await database.grades.create(bodyData)            
            return response.status(201).json(newGradeCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateGrade(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.grades.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedGrade = await database.grades.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedGrade)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeGrade(request, response, next){
        const { id } = request.params
        try {            
            await database.grades.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Nota com id ${ id } removida com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = GradesController
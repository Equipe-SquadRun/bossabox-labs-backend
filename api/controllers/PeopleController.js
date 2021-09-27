const { Sequelize } = require('../models')
const database = require('../models')

class PeopleController {

    static async getAllPeople(request, response, next){
        try {
            const people = await database.people.findAll()            
            return response.status(200).json(people)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOnePerson(request, response, next){
        const { id } = request.params
        try {
            const person = await database.people.findOne({
                where: {
                    id: Number(id)
                }
            })             
            return response.status(200).json(person)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOnePersonUser(request, response, next){
        const { id } = request.params
        try {
            const person = await database.people.findOne({
                where: {
                    id: Number(id)
                },
                include: [database.users]
            })             
            return response.status(200).json(person)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createPerson(request, response, next){
        const bodyData = request.body        
        try {
            const newPersonCreated = await database.people.create(bodyData)            
            return response.status(201).json(newPersonCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updatePerson(request, response, next){
        const { id } = request.params
        const newData = request.body         
        try {
            await database.people.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedPerson = await database.people.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedPerson)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removePerson(request, response, next){
        const { id } = request.params
        try {            
            await database.people.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Cadastro com id ${ id } removido com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = PeopleController
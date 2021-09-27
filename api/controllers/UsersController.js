const { Sequelize } = require('../models')
const database = require('../models')
const LoginController = require('./LoginController')

class UsersController {

    static async getAllUsers(request, response, next){
        try {
            const users = await database.users.findAll()
            //users.password = ''
            return response.status(200).json(users)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async getOneUser(request, response, next){
        const { id } = request.params
        try {
            const user = database.users.findOne({
                where: {
                    id: Number(id)
                }
            }) 
            //user.password = ''  
            return response.status(200).json(user)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createUser(request, response, next){
        const bodyData = request.body
        bodyData.password = await LoginController.cryptoPassword(bodyData.password) 
        try {
            const newUserCreated = await database.users.create(bodyData)
            return response.status(201).json(newUserCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async updateUser(request, response, next){
        const { id } = request.params
        const newData = request.body
        newData.password = await LoginController.cryptoPassword(newData.password) 
        try {
            await database.users.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedUser = await database.users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedUser)
        }
        catch(error){
            return response.status(400).json(error.message)            
        }
    }

    static async removeUser(request, response, next){
        const { id } = request.params
        try {            
            await database.users.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Usuário com id ${ id } removido com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

    static async loginAuthentication(request, response, next){
        try {
            const authBody = request.body
            const index = database.users.findIndex((item => item.login === authBody.login && item.password === authBody.password))
            if(index === -1){
                return res.status(401).end()
            }
            res.json({ auth: true, token: {} })
        }
        catch(error){            
            return response.status(400).json(error.message)
        }
    }
    
    static async logoffAuthentication(request, response, next){
        res.json({ auth: false, token: null })
    }
    
}

module.exports =  UsersController
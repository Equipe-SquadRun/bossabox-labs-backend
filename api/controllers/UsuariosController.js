const { Sequelize } = require('../models')
const database = require('../models')

class UsersController {

    static async getAllUsers(request, response, next){
        try {
            const users = await database.users.findAll()
            users.password = ''
            return response.status(200).json(users)            
        }
        catch(error){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
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
            return response.status(200).json(user)
        }
        catch(error){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async createUser(request, response, next){
        const newUser = request.body
        try {
            const newUserCreated = await database.users.create(newUser)
            return response.status(201).json(newUserCreated)
        }
        catch(error){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async updateUser(request, response, next){
        const { id } = request.params
        const newData = request.body
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
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async loginAuthentication(request, response, next){
        try {
            const authBody = req.body
            const index = database.users.findIndex((item => item.login === authBody.login && item.password === authBody.password))
            if(index === -1){
                return res.status(401).end()
            }
            res.json({ auth: true, token: {} })
        }
        catch(error){
            if(error instanceof SyntaxError){
                return response.status(400).json(error.message)
            }
        }
    }
    
    static async logoffAuthentication(request, response, next){
        res.json({ auth: false, token: null })
    }
    
}

module.exports =  UsersController
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
            const user = await database.users.findOne({
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

    static async getAllRoles(request, response, next){
        try {
            const roles = await database.roles.findAll()            
            return response.status(200).json(roles)            
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async createRole(request, response, next){
        const bodyData = request.body        
        try {
            const newRoleCreated = await database.roles.create(bodyData)
            return response.status(201).json(newRoleCreated)
        }
        catch(error){            
            return response.status(400).json(error.message)            
        }
    }

    static async removeRole(request, response, next){
        const { id } = request.params
        try {            
            await database.roles.destroy({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(`Grupo com id ${ id } removido com sucesso.`)
        }        
        catch(error){
            return response.status(400).json(error.message)
        }
    }

    static async getPermissions(request, response, next){
        const { id } = request.params
        try {
            const permission = await database.users_roles.findOne({
                where: {
                    users_id: Number(id)
                },
                include: [database.users, database.roles]
            })
            return response.status(200).json(permission)
        }
        catch(error){
            return response.status(400).json(error.message)
        }
    }

    static async setPermissions(request, response, next){
        const bodyData = request.body
        try {
            const newPermission = await database.users_roles.create(bodyData)
            return response.status(201).json(newPermission)
        }
        catch(error){
            return response.status(400).json(error.message)
        }
    }

    static async loginAuthentication(request, response, next){
        try {
            const authBody = request.body
            const user = await database.users.findOne({
                where: {
                    login: authBody.login
                }
            })            
            if(user !== null){
                const loginGranted = await LoginController.checkPassword(authBody.password, user.password)             
                console.log(loginGranted)
                if(loginGranted === true){                    
                    const token = await LoginController.signJWT(user)                    
                    return response.json({ auth: true, token })
                }
                else {
                    return response.status(401).end()
                }                           
            }
            else {
                return response.status(401).end()
            }
        }
        catch(error){            
            return response.status(400).json(error.message)
        }
    }
    
    static async logoffAuthentication(request, response, next){
        response.json({ auth: false, token: null })
    }
    
}

module.exports =  UsersController
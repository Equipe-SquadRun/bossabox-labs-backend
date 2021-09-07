const database = require('../models')
const Sequelize = require('sequelize')

class UsuariosController {

    static async pegarTodosUsuarios(req, res){
        try {
            const usuarios = await database.Users.findAll()
            return res.status(200).json(usuarios)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegarUsuario(req, res){
        const { id } = req.params
        try {
            const usuario = await database.Users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(usuario)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criarUsuario(req, res){
        const dadosUsuario = req.body
        try {
            const novoUsuario = await database.Users.create(dadosUsuario)
            return res.status(200).json(novoUsuario)
        }        
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarUsuario(req, res){
        const { id } = req.params
        const dadosUsuario = req.body
        try {
            await database.Users.update( dadosUsuario, { where: { id: Number(id) }})
            const usuarioAlterado = await database.Users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(usuarioAlterado)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = UsuariosController
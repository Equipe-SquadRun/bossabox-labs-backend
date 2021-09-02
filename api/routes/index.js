const bodyParser = require('body-parser')
const geral = require('./geralRoute')
const usuarios = require('./usuariosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        geral        
    )
}

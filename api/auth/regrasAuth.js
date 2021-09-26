const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const UsuariosController = require('../controllers/UsuariosController')

module.exports = function(passport){
    passport.use(
        new LocalStrategy ({
            usernameField: 'login',
            passwordField: 'password',
            session: false
        }, async (login, password, done) => {
            try {
                const usuario = await UsuariosController.pegarUsuarioEmail(login)
                if(!user) return done(null, false)
                
                const senhaValidada = bcrypt.compareSync(password, usuario.password)
                if(!senhaValidada) return done(null, false)
                return done(null, usuario)
            }
            catch(error){
                return res.status(500).json(error.message)
            }
        })
    )
}



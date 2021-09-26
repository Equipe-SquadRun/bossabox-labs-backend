const bcrypt = require('bcrypt')

class LoginController {

    static async criptografarSenha(pswd){        
        const senha = await this.gerarSenhaHash(pswd)
        return senha
    }

    static gerarSenhaHash(pswd){
        const salt = 10
        const senha = bcrypt.hash(pswd, salt)
        return senha
    }

}

module.exports = LoginController
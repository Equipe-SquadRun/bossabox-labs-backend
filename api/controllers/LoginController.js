const bcrypt = require('bcrypt')

class LoginController {

    static async cryptoPassword(pswd){        
        const senha = await this.generatePasswordHash(pswd)
        return senha
    }

    static generatePasswordHash(pswd){
        const salt = 10
        const senha = bcrypt.hash(pswd, salt)
        return senha
    }

}

module.exports = LoginController
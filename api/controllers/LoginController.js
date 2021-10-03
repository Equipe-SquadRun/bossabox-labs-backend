const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const privateKey = fs.readFileSync('./keys/private.key', 'utf8')
const publicKey = fs.readFileSync('./keys/public.key', 'utf8')
const jwtTimeExpire = process.env.JWT_EXPIRES
const jwtAlgorithm = "RS256"

class LoginController {

    static async cryptoPassword(pswd){
        return bcrypt.hashSync(pswd, 10)
    }

    static async checkPassword(pswd, hashPswd){
        return bcrypt.compareSync(pswd, hashPswd)
    }

    static async signJWT(userId){
        const token = { id: userId.id }
        return jwt.sign(token, privateKey, { expiresIn: jwtTimeExpire, algorithm: jwtAlgorithm })
    }

    static async checkToken(token){
        try {
            const decoded = await jwt.verify(token, publicKey, { algorithm: [jwtAlgorithm] })
            return { userId: decoded.userId }
        }
        catch(error){
            console.log(`Erro no checkToken: ${ error }`)
            return null
        }
    }

}

module.exports = LoginController
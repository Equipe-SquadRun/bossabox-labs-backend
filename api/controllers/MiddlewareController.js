const LoginController = require('./LoginController')

class MiddlewareController {

    static async validatingAuth(request, response, next){
        try {
            const token = request.headers['x-access-token']
            if(!token){
                return response.status(401).end()                
            }
            const payload = await LoginController.checkToken(token)
            if(!payload){
                return response.status(401).end()
            }
            response.locals.payload = payload
            next()
        }
        catch(error){
            return response.status(400).json(error.message)
        }
    }

}

module.exports = MiddlewareController
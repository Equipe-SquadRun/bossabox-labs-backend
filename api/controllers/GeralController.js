class GeralController {

    static async retornaOk(req, res){
        try {
            return res.status(200).json('A API está funcionando ok!')
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = GeralController
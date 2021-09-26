require('dotenv').config()
const express = require('express')
const routes = require('./routes')

// const passport = require('passport')
// require('./auth/regrasAuth')(passport)

const port = parseInt(`${ process.env.PORT }`)
const app = express()
app.use(express.json())

routes(app)

app.listen(port, () => console.log(`API funcionando na porta ${ port }`))

module.exports = app
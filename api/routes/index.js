const bodyParser = require('body-parser')
const general = require('./generalRoute')
const users = require('./usersRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        general,
        users
    )
}

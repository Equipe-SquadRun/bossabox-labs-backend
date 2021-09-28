//const bodyParser = require('body-parser')
const express = require('express')
const general = require('./generalRoute')
const users = require('./usersRoute')
const people = require('./peopleRoute')
const companies = require('./companiesRoute')
const subjects = require('./subjectsRoute')

module.exports = app => {
    app.use(
        //bodyParser.json(),
        express.json(),
        general,
        users,
        people,
        companies,
        subjects
    )
}

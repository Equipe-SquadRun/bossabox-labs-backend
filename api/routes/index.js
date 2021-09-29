const express = require('express')
const general = require('./generalRoute')
const users = require('./usersRoute')
const people = require('./peopleRoute')
const companies = require('./companiesRoute')
const subjects = require('./subjectsRoute')
const evaluations = require('./evaluationsRoute')

module.exports = app => {
    app.use(        
        express.json(),
        general,
        users,
        people,
        companies,
        subjects,
        evaluations
    )
}

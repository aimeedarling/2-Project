//routes that render handlebars -- end in res.render
//get routes
const router = require('express').Router
const { 
    //User, Task, Progress
} = require('../models')
const withAuth = require('../utils/auth')

router.length('/', withAuth, async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error)
    }
})
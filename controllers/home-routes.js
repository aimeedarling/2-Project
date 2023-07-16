//routes that render handlebars -- end in res.render
//get routes
const router = require('express').Router()
const { 
    User, Task
} = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const todoData = await Task.findAll({where: {id: req.session.user_id, progress:'todo' }})
        const todos = todoData.map(todo => todo.get({plain: true}))

        const inProgressData = await Task.findAll({ where: { id: req.session.user_id, progress: 'in-progress' } })
        const inProgress = inProgressData.map(todo => todo.get({ plain: true }))

        const completedData = await Task.findAll({ where: { id: req.session.user_id, progress: 'completed' } })
        const completed = completedData.map(todo => todo.get({ plain: true }))

        res.render('homepage', {todos, inProgress, completed})
    } catch (error) {
        res.status(500).json(error)
    }
})


// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


module.exports = router
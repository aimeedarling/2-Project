//routes 

const router = require('express').Router();
const userRoutes = require('./user-routes');
const taskRoutes = require('./task-routes');
const progressRoutes = require("./progress-routes")

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/progress', progressRoutes)

module.exports = router;

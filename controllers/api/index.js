//routes 

const router = require('express').Router();
const userRoutes = require('./user-routes');
const taskRoutes = require('./task-routes');
const progressRoutes = require('./progress-routes')

router.use('/user-routes', userRoutes);
router.use('/task-routes', taskRoutes);
router.use('/progress-routes', progressRoutes);
module.exports = router;

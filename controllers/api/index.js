//routes 

const router = require('express').Router();
const userRoutes = require('./user-routes');
// const taskRoutes = require('./task-routes');


router.use('/user-routes', userRoutes);
// router.use('/task-routes', taskRoutes);


module.exports = router;

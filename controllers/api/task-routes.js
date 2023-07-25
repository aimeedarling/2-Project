const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

/*
 * This route creates a new task.
 */
router.post('/', withAuth, async (req, res) => {
    try {
        const newTask = await Task.create({
            task_name: req.body.task_name,
            progress: req.body.progress,
            user_id: req.session.user_id
        });
        res.status(200).json(newTask);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;
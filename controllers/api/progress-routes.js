const router = require('express').Router();
const { Task } = require('../../models');


router.put('/:id', async (req, res) => {
    try {
        // const task = await Task.findById(req.params.id);
        // console.log(task)
        const taskId = req.params.id
        console.log(taskId)
        // if (!task) {
        //     res.status(404).end();
        // } else {
        const updatedTask = await Task.update({
            progress: req.body.progress
        },
            { where: { id: taskId } });
        res.status(200).json(updatedTask);
        // }
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteTask = await Task.destroy({
            where: {
                id: req.params.id
                // user_id: req.session.user_id,
            },
        });

        // if (!deleteTask) {
        //     res.status(404).json({ message: 'Failed!' });
        //     return;
        // }

        res.status(200).json(deleteTask);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
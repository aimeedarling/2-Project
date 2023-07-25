const router = require('express').Router();
const { Task } = require('../../models');

//update task progress
router.put('/:id', async (req, res) => {
    try {

        const taskId = req.params.id
        console.log(taskId)
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

//deleted task
router.delete('/:id', async (req, res) => {
    try {
        const deleteTask = await Task.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(deleteTask);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
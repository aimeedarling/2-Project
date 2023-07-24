const router = require('express').Router();
const { Task } = require('../../models');



// router.put('/tasks/:id', async (req, res) => {
//     try {
//         await Task.update(req.body, {
//             where: { id: req.params.id }
//         })
//         console.log(r)
//         res.status(204).end()

//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

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

// router.delete('/:id', async (req, res) => {
//     try {
//         const deleteTask = await Task.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })

//         if (!deleteTask) {
//             res.status(404).json({ message: 'Wrong' })
//         }
//         res.status(200).json(deleteTask)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

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
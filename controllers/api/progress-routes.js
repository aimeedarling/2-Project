const router = require('express').Router();
const { Task } = require('../../models');

router.put('/:id', async (req,res) => {
    try {
        const taskID = req.params.id;
        const {progress} = req.body;

        await Task.update({progress}, {where: {id: taskID}})
        res.status(204).end()

    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const deleteTask = await Task.destroy ({
            where:{
                id: req.params.id
            }
        })
    
        if(!deleteTask) {
            res.status(404).json({message: 'Wrong'})
        }
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(500).json(error)        
    }
})

module.exports = router;
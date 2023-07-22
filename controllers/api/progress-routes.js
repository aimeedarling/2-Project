const router = require('express').Router();
const { Task } = require('../../models');

router.put('/:id', async (req,res) => {
    try {
        await Task.update(req.body, {where:{id:req.params.id}})
        res.status(204).end()

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;
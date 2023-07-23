

const { Task } = require('../../models');


// some comment 
router.put('/:id', async (req,res) => {
    try {

       await Task.update(req.body, {
            where:{id:req.params.id}
        })
        console.log(r)
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
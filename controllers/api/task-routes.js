//get task
router.get('/', async (req,res) => {
    //get all tasks
    try {
        const tasks = await Task.findAll({
            include: [{model: Task}]
        })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
})

//create new task
router.get('/:id', async (req, res) => {
    //get one task by it's id 
    try {
        const singleTask = await Task.findbyPk(req.params.id, {
            include: [Task]
        })
        res.status(200).json(allCategories)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
})

//update task


//delete task

const router = require('express').Router()
const { User } = require('../../models')

//create user
router.post('/', async (req,res) => {
    try {
        const newUser = await User.create(req.body);

        req.session.save(() =>{
            req.session.user_is = newUser.id;
            req.session.logged_in = true;

            res.status(200).json(newUser)
        })
        
    } catch (error) {
        res.status(400).json(error)
    }
})

//update user

//destroy user


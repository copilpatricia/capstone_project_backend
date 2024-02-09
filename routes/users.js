import {Router} from 'express';
import Users from '../models/users.js'

const router = new Router();

// GET route - returns all users

router.get('/', async(req, res) => {
    try {
        const users = await Users.find({});
        if(!users) return res.status(404).json({msg: "User not found!"});
        else res.json(users);
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await Users.findById(id)
        if(!user) return res.status(404).json({msg: "User not found!"});
        else res.json(user)
    } catch (error) {
        console.log(error);
    }
})

// POST route - creates a new user

router.post('/', async(req, res) => {
    try {
        const users = await Users.create(req.body)
        res.status(203).json(users)
    } catch (error) {
        console.log(error)
    }
})
    
// PUT route - to update an user

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        
        if (body.password) {
            delete body.password;
          }
      
        const updatedUser = await Users.findByIdAndUpdate(id, body, {new: true});
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
})

// DELETE route - to delete an user

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await Users.findByIdAndDelete(id);
        res.json({msg: "User deleted", deletedUser})
    } catch (error) {
        console.log(error)
    }
})

export default router
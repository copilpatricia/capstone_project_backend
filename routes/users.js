import {Router} from 'express';
import Users from '../models/users.js';
import Reviews from '../models/reviews.js';
import bcrypt from 'bcrypt';

const router = new Router();

// GET route - returns all users

router.get('/', async(req, res) => {
    try {
        const users = await Users.find({}).populate({path: "user_id"});
        if(!users) return res.status(404).json({msg: "User not found!"});
        else res.json(users);
    } catch (error) {
        console.log(error)
    }
})

// GET/:id router - returns a single user

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
        const users = await Users.create(req.body);
        const review = await Reviews.create({
            user_id: users._id,
            username: users.username,
            review: req.body.review
        
        });

        res.status(203).json({users, review})
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

//POST ROUTE - for the signup form

router.post('/signup', async(req, res) => {
    try {
        console.log(req.body)
        const {email, password} = req.body;
        const user = await Users.findOne({email});
        if(user) {
            return res.status(401).json({msg: "User already exist!"})
        }

        const createUser = await Users.create(req.body)
        res.status(203).json(createUser)
    } catch (error) {
        console.log(error)
    }
})

// POST ROUTE - for the singin form

router.post('/signin', async(req, res) => {
    try {
        console.log(req.body)
        const {email, password} = req.body
        const user = await Users.findOne({email});

        if(!user) {
            return res.status(401).json({msg: "Invalid data!"})
        }
        
        const passwordMatched = await bcrypt.compare(password, user.password);

        if (!passwordMatched) {
            return res.status(401).json({msg: "Invalid password"})
          }
        res.json(user)
    } catch (error) {
        console.log(error)
    }
})

export default router
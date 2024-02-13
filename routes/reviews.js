import {Router} from 'express';
import Reviews from "../models/reviews.js";

const router = new Router();


// GET route - returns all reviews

router.get('/', async(req, res) => {
    try {
        const reviews = await Reviews.find({});
        if(!reviews) return res.status(404).json({msg: "Reviews not found"})
        else res.json(reviews)
    } catch (error) {
        console.log(error);
    }
});

// GET /:id router - return a single review

router.get(':/id', async(req, res) => {
    try {
        const{id} = req.params;
        const review = await Reviews.findById(id);
        if(!review) return res.status(404).json({msg: "Review not found!"})
    } catch (error) {
        console.log(error);
    }
});

// POST router - create a review

router.post('/', async(req, res) => {
    try {
        const reviews = await Reviews.create(req.body);
        res.status(203).json(reviews)
    } catch(error) {
        console.log(error);
    }
})


// PUT route - to update a review

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
    
        const updateReview = await Reviews.findByIdAndUpdate(id, body, {new: true});
        res.json(updateReview)
    } catch(error) {
        console.log(error);
    }
})


// DELETE route - to delete a review

router.delete('/:id' , async(req, res) => {
    try{
        const {id} = req.params;
        const deleteReview = await Reviews.findByIdAndDelete(id);
        res.json({msg: "Review deleted", deleteReview})
    } catch(error) {
        console.log(error)
    }
})

export default router;
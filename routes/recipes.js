import {Router} from 'express';
import Recipes from '../models/recipes.js'

const router = new Router();
// GET route - returns all recipes

router.get('/', async(req, res) => {
    try {
        const recipes = await Recipes.find({});
        res.status(200).json(recipes)
    } catch (error) {
        console.log(error)
        
    }
})

// GET /:id route - return a single recipe selected by the id

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        console.log("ID:", id);
        const recipes = await Recipes.findById(id);
        res.status(200).json(recipes)
    } catch (error) {
        console.log(error);
        res.json({msg: "Recipe not found!"})
        
    }
});

// POST route - to create new recipe

router.post('/', async(req, res) => {
    try {
        const recipes = await Recipes.create(req.body);
        res.status(203).json(recipes);
    } catch (error) {
        console.log(error);
    }
});

//PUT route - to update a recipe

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updateRecipe = await Recipes.findByIdAndUpdate(id, body, {new: true});
        res.json(updateRecipe)
    } catch (error) {
        console.log(error);
        res.json({msg: "Recipe not found!"})
        
    }
})

// DELETE route - to delete a recipe

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteRecipe = await Recipes.findByIdAndDelete(id);
        res.json({msg: "Recipe deleted", deleteRecipe})
    } catch (error) {
        console.log(error)
    }
})

export default router;
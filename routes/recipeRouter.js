const recipeRouter = require('express').Router();
const recipeModel = require('../models/recipeModel')

//recuperer toutes les recettes
recipeRouter.get('/recipes', async (req, res) => {
    try {
        let page = req.query.page || 1 
        let limit = req.query.limit ||  4;
        let recipes
        if (req.query.filter){
            recipes = await recipeModel.find({ ingredients: {$in: [req.query.filter]} })
        }else{
            recipes = await recipeModel.find().skip((page - 1)*limit).limit(limit)
        }
        res.json(recipes)

    }catch (error){
        console.log(error);
        res.json(error)
    }
})

//recuperer une recette par l'id
recipeRouter.get("/recipes/id/:id", async (req, res) => {
    try {
        let recipe = await recipeModel.findOne({ _id: req.params.id })
        res.json(recipe)

    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

//recuperer une recette par son nom
recipeRouter.get("/recipes/name/:name", async (req, res) => {
    try {
        let recipe = await recipeModel.findOne({ name: req.params.name })
        res.json(recipe)

    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

//créer une recette
recipeRouter.post('/recipe', async (req, res) => {
    try {
        let recipe = new recipeModel(req.body)
        await recipe.save()
        res.json(recipe)
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
})

//modifier une recette
recipeRouter.put('/recipes/:id', async (req, res) => {
    try {
        let recipe = await recipeModel.updateOne({ _id: req.params.id }, req.body)
        res.json(recipe)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

//suppression de recette
recipeRouter.delete('/recipes/:id', async (req, res) => {
    try {
        let recipe = await recipeModel.deleteOne({ _id: req.params.id })
        res.json(recipe)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})


module.exports = recipeRouter
const mongoose = require("mongoose") //import de mongoose

//definition du schéma de données des users
const recipeShema = new mongoose.Schema({
    name : {
        type : String,
        require: [true, "Le nom est obligatoire"]
    },
    ingredients : {
        type : Array,
        require: [true, "Les ingrédients sont requis"]
    },
    steps :{
        type : String,
        require: [true, "étapes obligatoires"]
    },
    author : {
        type : String,
        default: 'Anonyme'
    }
})


//declaration de mon modele de  données qui sera connecté à la collection "users" et qui utilisera mon schéma
const recipeModel = mongoose.model('Recipes', recipeShema);
module.exports = recipeModel;

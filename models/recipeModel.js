const mongoose = require("mongoose") //import de mongoose

//definition du schéma de données des users
const recipeShema = new mongoose.Schema({
    name : {
        type : String,
    },
    ingredients : {
        type : Array,
    },
    steps :{
        type : String,
    },
    author : {
        type : String,
    }
})


//declaration de mon modele de  données qui sera connecté à la collection "users" et qui utilisera mon schéma
const recipeModel = mongoose.model('Recipes', recipeShema);
module.exports = recipeModel;

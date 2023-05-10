const express = require("express"); // apres install expres , on l'importe
const mongoose = require("mongoose"); // apres install mongoose , on l'importe
const cors = require("cors");
const recipeRouter = require("./routes/recipeRouter")

const app = express()

app.use(cors())
app.use(express.json())
app.use(recipeRouter)

//connction au port 3001 du server
app.listen(3001, (err)=>{ 
	if (err) {
		console.log(err)
	}else{
		console.log("vous êtes connecté");
	}
})

//connexion à la base de donnée "apiUser"
try {
    mongoose.connect("mongodb://127.0.0.1:27017/apiRecipes");
    
} catch (error) {
   console.log(error)
}

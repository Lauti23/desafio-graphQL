import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

//CONEXIÓN
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err))

//COLECCIÓN
const collection = "users"

//SCHEMA
const userSchema = new Schema({
    name: String,
    age: Number,
    country: String,
    club: String
})

export const userModel = mongoose.model(collection, userSchema);

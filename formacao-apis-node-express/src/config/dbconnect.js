import mongoose from "mongoose";

async function conectaDB(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.1ehb1.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
} 

export default conectaDB

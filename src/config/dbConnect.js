import mongoose from "mongoose"

mongoose.connect("mongodb+srv://JeanWerlang:Runescape123@aprendizado.dx9i3.mongodb.net/Aprendizado-mongoDB");

let db = mongoose.connection;

export default db;


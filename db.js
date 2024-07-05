
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://blankgamer132:C0FVVFg9Owgpi5NU@cluster0.gpisnd1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
     
})
mongoose.connection.close();

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}  
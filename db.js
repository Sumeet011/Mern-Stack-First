
const mongoose=require("mongoose");


mongoose.connect("")
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

const express= require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./DB.JS");
const cors = require("cors");
const app= express();

app.use(express.json());
app.use(cors());


app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You Send The Wrong Input",
        })
        return;

    }
    await todo.create({
        title: createPayload.title,
        description :createPayload.description,
        completed: false
    })
    
    res.json({
        msg:"Todo Created Succesfully"
    })
})



app.get("/todos",async function(req,res){
    const todos=await todo.find({});

    res.json({
        todos: []
    })

    
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You Enterd Wrong Input"
        })
        return;
    }
    await todo.updateTodo({
        _id: req.body.id,

    },{
        completed: true,
    })
    res.json({
        msg:"Todo Marked Done "
    })
    
})

app.listen(3000);
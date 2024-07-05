const zod= require("zod");

const createTodo=zod.object({
    title: zod.string(),
    description: zod.string()
})

//Created objects Structure Using Zod Because Zod Also Provide Authination Like A title Has to BE String etc

const updateTodo=zod.object({
       id: zod.string()
})


module.exports ={
    createTodo: createTodo,
    updateTodo:updateTodo
}
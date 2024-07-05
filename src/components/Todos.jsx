export function Todos({todos}){
    return(
        <div>
        {todos.map(function(todo){
            return (<div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.complete==true? "Completed" :"Mark As Done"}</button>
                </div>)
        })}
        </div>
    )
        
    
}
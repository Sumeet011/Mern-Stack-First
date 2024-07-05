import { useState } from "react";
import {CreateTodo} from "./components/Createtodo";
import { Todos } from "./components/Todos";

function App() {
    const [todos, setTodos]=useState([]);


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App

import React from "react";
import { useState } from "react";
export const Todo = () =>{
    let [newTodo,setnewTodo] = useState("");
    const [todos, settodos] = useState([]);
    const handleChange = (e)=>{
    setnewTodo(e.target.value);
    }

    return ( 
        <div>
        <div>Todo</div>,
        <input onChange = {handleChange}/>
      <button onClick = {()=>{
          console.log(newTodo);
          
         todos.push({id:Date.now(),
            value:newTodo,
            isCompleted:false,
        })
     
          settodos([...todos])
      }}>Add</button>
      {todos.map((todo)=>{
   return <div>{todo.value}</div>
      })}
 
        </div>
    )
     
}

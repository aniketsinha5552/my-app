import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props)  {
  return (
    <div className="container">
        
        <h3 className=" my-2 ">Todos List</h3>
        {props.todos?.length===0? "No todos to display":
        props.todos.map((todo)=>{
            return(
              <>
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
              </>
        )}     
        )
        }
       
    </div>
  )
}

import React, { useState } from "react";

export default function AddTodo({addTodo}) {

    const[title,setTitle]= useState("");
    const[desc,setDesc]= useState(""); 

    const submit=(e)=>{
          e.preventDefault();
          if(!title || !desc ){
            alert("Idiot!!! Add a title/description.")
          }
          addTodo(title,desc);
          setTitle("");
          setDesc("");
    }
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlfor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  )
}

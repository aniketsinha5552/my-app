import "./App.css";
import Footer from "./MyComponenents/Footer";
import Header from "./MyComponenents/Header";
import Todos from "./MyComponenents/Todos";
import AddTodo from "./MyComponenents/AddTodo";
import React, { useState ,useEffect, } from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
           initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am deleted of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  const addTodo=(title,desc)=>{
    console.log("Todo adding", title,desc)
    let sno
    if(todos.length===0){
       sno=0;
    }
    else{
     sno = todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  

  return (
    <>
      <Header title="My Todos List" searchbar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer></Footer>
    </>
  );
}

export default App;

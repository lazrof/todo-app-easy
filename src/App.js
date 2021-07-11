import React, { useState } from "react";
import ToDo from "./components/ToDo";
import "./styles.css";

export default function App() {
  /*
  review all functionality off this todo component
  maybe recap a tutorial of a todo react app
  */
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  function handleChange(event) {
    //setName({value: event.target.value});
    setName(event.target.value);
  }

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  //const TodoList = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
  //const TodoList = <li>name</li>;

  return (
    <>
      <h1>TodoApp - easy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-name">Add toDo</label>
        <input id="todo-name" name="todo-name" onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

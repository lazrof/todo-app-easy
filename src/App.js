import React, { useState } from "react";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Sacar la basura",
      isDone: true
    }
  ]);

  function addTodo(value) {
    setTodos([value, ...todos]);
  }

  function toggleTodo(key) {
    setTodos(
      // Returns the same array but change the obj affected
      todos.map((todo, currentTodo) =>
        currentTodo === key
          ? {
              ...todo,
              isDone: !todo.isDone
            }
          : todo
      )
    );
  }

  return (
    <>
      <h1>TodoApp - easy</h1>
      <Form addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo key={index} data={todo} dataKey={index} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}

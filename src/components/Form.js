import React from "react";

function Form(props) {
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      text: value,
      isDone: false
    };
    props.addTodo(todo);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-name">Add toDo </label>
      <input
        id="todo-name"
        name="todo-name"
        onChange={handleChange}
        value={value}
        required
      ></input>
      <input type="submit"></input>
    </form>
  );
}

export default Form;

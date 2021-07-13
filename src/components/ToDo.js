import React from "react";

function ToDo(props) {
  let isDone = props.data.isDone ? { textDecoration: "line-through" } : {};

  function toggle() {
    props.toggleTodo(props.dataKey);
  }
  return (
    <li style={isDone} onClick={toggle}>
      {props.data.text}
    </li>
  );
}

export default ToDo;

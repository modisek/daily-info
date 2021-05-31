import React from "react";

const TodoList = ({ todo, index, markTodo, removeTodo }) => {
  return (
    <div>
      <h4>{todo}</h4>
      <button onClick={() => markTodo(index)}>mark as done</button>
      <button onClick={() => removeTodo(index)}>delete</button>
    </div>
  );
};

export default TodoList;

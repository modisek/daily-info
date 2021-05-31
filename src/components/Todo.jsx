import React, { useState } from "react";
import TodoList from "./TodoList";
const Todo = () => {
  const [todos, setTodos] = useState(["sleep", false]);
  const [value, setValue] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, [text]];
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
	  console.log(newTodos[index])
   // newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const submitForm = (event) => {
    event.preventDefault();
    addTodo(value);
    console.log(todos, value);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoList key={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
      ))}
      <form onSubmit={submitForm}>
        <label htmlFor="todoinput">Enter a todo</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Todo;

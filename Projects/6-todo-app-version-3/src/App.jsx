import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  let initialTOdoItems = [
    { name: "Buy milk", dueDate: "03/17/2026" },
    { name: "Go to school", dueDate: "03/17/2026" },
    { name: "Do homework", dueDate: "03/17/2026" },
  ];

  const [todoItems, setTodoItems] = useState(initialTOdoItems);

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;

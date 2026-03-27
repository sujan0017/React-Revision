import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let initialTOdoItems = [
    { name: "Buy milk", dueDate: "03/17/2026" },
    { name: "Go to school", dueDate: "03/17/2026" },
    { name: "Do homework", dueDate: "03/17/2026" },
  ];

  const [todoItems, setTodoItems] = useState(initialTOdoItems);

  const handleNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`${todoItemName} is deleted.`);
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;

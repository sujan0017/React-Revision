import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  removeItem: () => {},
});

const todoItemsReducer = (currentState, action) => {
  let newTodoItem = currentState;

  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currentState,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
    return newTodoItem;
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currentState.filter(
      (item) => item.name !== action.payload.itemName,
    );
    return newTodoItem;
  }

  return [];
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

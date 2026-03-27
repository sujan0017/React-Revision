import { useContext, useRef } from "react";
import { MdAddComment } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleOnClickAdd = (e) => {
    e.preventDefault();

    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleOnClickAdd} className="row kg-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="To do list here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date" />
        </div>
        <div className="col-2">
          <button className={` btn btn-success kg-button`}>
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

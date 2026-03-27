import { useRef } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleOnClickAdd = (e) => {
    e.preventDefault();

    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
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
          <button
            // onClick={handleOnClickAdd}
            className={` btn btn-success kg-button`}
            // type="button"
          >
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

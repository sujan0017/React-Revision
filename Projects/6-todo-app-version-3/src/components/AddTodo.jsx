import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleOnClickAdd = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="To do list here"
            value={todoName}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className="col-4">
          <input value={dueDate} onChange={(e) => handleDateChange(e)} type="date" />
        </div>
        <div className="col-2">
          <button
            onClick={handleOnClickAdd}
            className={` btn btn-success kg-button`}
            type="button"
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

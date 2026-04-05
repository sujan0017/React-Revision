import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handelAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handelSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary "
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-success "
        >
          -1
        </button>
        <button
          onClick={handlePrivacyToggle}
          type="button"
          className="btn btn-warning "
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          ref={inputElement}
          type="text"
          className="number-input"
          placeholder="Enter number"
        />

        <button onClick={handelAdd} type="button" className="btn btn-info ">
          Add
        </button>
        <button
          onClick={handelSubtract}
          type="button"
          className="btn btn-danger "
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;

import React from "react";
import style from "./ButtonContainer.module.css";

function ButtonContainer() {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const onClickHandler = (e) => {
    console.log(e);
    console.log(`Hello user u press ${e.target.value}`);
  };
  return (
    <div className={style.buttonContainer}>
      {buttonName.map((name) => (
        <button
          onClick={(e) => onClickHandler(e)}
          key={name}
          className={style.button}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;

import style from "./ButtonContainer.module.css";

function ButtonContainer({ onClickHandler }) {
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

  return (
    <div className={style.buttonContainer}>
      {buttonName.map((buttonText) => (
        <button
          onClick={() => onClickHandler(buttonText)}
          key={buttonText}
          className={style.button}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;

import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./assets/components/ButtonContainer";
import Display from "./assets/components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onClickHandler = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  return (
    <>
      <h1 className={style.calculatorHeader}>Calculator</h1>
      <div className={style.calculator}>
        <Display calVal={calVal} />
        <ButtonContainer onClickHandler={onClickHandler} />
      </div>
    </>
  );
}

export default App;

import style from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={style.calculatorHeader}>Calculator</h1>
      <center className={style.calculator}>
        <input className={style.display} type="text" />
        <div className={style.buttonContainer}>
          <button className={style.button}>c</button>
          <button className={style.button}>1</button>
          <button className={style.button}>2</button>

          <button className={style.button}>+</button>
        </div>
      </center>
    </>
  );
}

export default App;

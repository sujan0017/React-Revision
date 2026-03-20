import style from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={style.calculatorHeader}>Calculator</h1>
      <center className={style.calculator}>
        <input className={style.display} type="text" />
        <div className="button  -container">
          <button className="btn kb-button btn-danger">1</button>
        </div>
      </center>
    </>
  );
}

export default App;

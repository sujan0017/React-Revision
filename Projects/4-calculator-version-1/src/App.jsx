import style from "./App.module.css";
import ButtonContainer from "./assets/components/ButtonContainer";
import Container from "./assets/components/Container";
import Display from "./assets/components/Display";

function App() {
  return (
    <>
      <h1 className={style.calculatorHeader}>Calculator</h1>
      <div className={style.calculator}>
        <Display />
        <ButtonContainer />
      </div>
    </>
  );
}

export default App;

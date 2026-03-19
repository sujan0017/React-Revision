import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClockHeader from "./components/ClockHeader";
import ClockDesc from "./components/ClockDesc";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <>
      <center className="container ">
        <ClockHeader />
        <ClockDesc />
        <CurrentTime />
      </center>
    </>
  );
}

export default App;

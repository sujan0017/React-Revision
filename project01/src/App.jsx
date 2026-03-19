import "./App.css";
import Button from "./assets/components/Button";
import { NewButton, AnotherButton } from "./assets/components/NewButton";

import MixedExport, { MyMixedExport } from "./assets/components/MixedExport";
import Hello from "./assets/components/Hello";

function App() {
  return (
    <div>
      Hello world
      <br />
      <Button />
      <br />
      <NewButton />
      <AnotherButton />
      <br />
      <MixedExport />
      <MyMixedExport />
      <br />
      <Hello name={"Ram"} grating={"Good morning"}/>
    </div>
  );
}

export default App;

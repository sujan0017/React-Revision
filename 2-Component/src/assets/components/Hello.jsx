import React from "react";

function Hello({ name, grating }) {
  let newName = "myName";

  let moduleName = () => {
    return "this is new Module";
  };

  let number = Math.random()* 100;

  return (
    <div>
      Hello {name}, {grating}
      <br />
      <p>This is the {newName}</p>
      <br />
      <p>{moduleName()}</p>
      <br />
      <p> This is the random number {Math.round(number)}</p>
    </div>
  );
}

export default Hello;

import style from "./Display.module.css";

function Display({ calVal }) {
  return (
    <>
      <input className={style.display} type="text" value={calVal} readOnly />
    </>
  );
}

export default Display;

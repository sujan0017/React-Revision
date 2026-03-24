import React from "react";
import styles from "./AddFoodItem.module.css";

function AddFoodItem({ handleKeyDown }) {
  return (
    <input onKeyDown={handleKeyDown} className={styles.display} type="text" />
  );
}

export default AddFoodItem;

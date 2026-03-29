import React from "react";
import styles from './Items.module.css'

function Items({ foodItem }) {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
    </>
  );
}

export default Items;

import React from "react";
import styles from "./FoodItem.module.css";

function FoodItem({ fruit }) {
  const handleOnClickBuy = () => {
    console.log(`The ${fruit} is bought.`);
  };

  return (
    <li  className="list-group-item">
      {fruit}
      <button onClick={handleOnClickBuy} className={`${styles.button}`}>
        Buy Item
      </button>
    </li>
  );
}

export default FoodItem;

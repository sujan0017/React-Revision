import React, { useState } from "react";
import Item from "./Item";

function FoodItems({ healthyFoods }) {
  const [activeItem, setActiveItem] = useState([]);

  const onBuyButton = (fruit, e) => {
    let newActiveItem = [...activeItem, fruit];
    setActiveItem(newActiveItem);
    console.log(`${fruit} is bought.`);
  };

  return (
    <ul className="list-group">
      {healthyFoods.map((fruit) => (
        <Item
          key={fruit}
          healthyFoods={healthyFoods}
          fruit={fruit}
          handleBuyButtonClicked={(e) => onBuyButton(fruit, e)}
          activeItem={activeItem.includes(fruit)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;

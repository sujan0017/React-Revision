import React from "react";
import Items from "./Items";

function FoodItems({foodItems}) {
    
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
         <Items key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;

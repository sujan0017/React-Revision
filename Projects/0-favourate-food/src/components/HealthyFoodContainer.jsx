import React from "react";
import Container from "./Container";
import styles from "./HealthyFoodContainer.module.css";
import FoodItem from "./FoodItem";

function HealthyFoodContainer({ healthyFoods, handleOnchange }) {
  const handleOnClick = ({ healthyFoods }) => {
    console.log(`You added ${healthyFoods}`);
  };

  return (
    <>
      <Container>
        <h1 className="text-center">Healthy Foods </h1>
        <input
          onChange={handleOnchange}
          className={styles.display}
          type="text"
        />
        <ul className="list-group">
          {healthyFoods.map((fruit) => (
            <FoodItem
              key={fruit}
              healthyFoods={healthyFoods}
              fruit={fruit}
              handleOnClick={handleOnClick}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default HealthyFoodContainer;

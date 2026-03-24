import { useState } from "react";
import "./App.css";
import AddFoodItem from "./components/AddFoodItem";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";

function App() {
  const [foodItems, setFoodItems] = useState(["Apples", "Bananas", "Broccoli"]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      let newArray = [...foodItems, newFoodItem];
      setFoodItems(newArray);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-center">Healthy Foods </h1>
        <AddFoodItem handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems healthyFoods={foodItems} />
      </Container>
    </>
  );
}

export default App;

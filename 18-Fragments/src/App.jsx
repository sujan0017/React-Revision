import "./App.css";
import FoodItems from "./assets/components/FoodItems";
import ErrorMessage from "./assets/components/ErrorMessage";

function App() {
  let foodItems = ["Fruits", "Salad", "Milk", "Vegetables"];
  //   let foodItems = [];

  //  Conditional-Rendering-Method1--if/else
  // if (foodItems.length === 0) {
  //   return <h1>I am Still hungry</h1>;
  // } else null;

  //  Conditional-Rendering-Method2--TernaryOperator
  // const emptyMessage =
  //   foodItems.length === 0 ? <h1>I am Still hungry</h1> : null;

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      {/* {emptyMessage} */}

      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default App;

import "./App.css";
import HealthyFoodContainer from "./components/HealthyFoodContainer";

function App() {
  const healthyFoods = [
    "Apples",
    "Bananas",
    "Broccoli",
    "Spinach",
    "Carrots",
    "Sweet Potatoes",
    "Oats",
    "Brown Rice",
    "Eggs",
    "Salmon",
    "Chicken Breast",
    "Almonds",
    "Walnuts",
    "Yogurt",
    "Avocado",
  ];

  const handleOnchange = (e) => {
    console.log(e.target.value);
  };



  return (
    <div>
      <HealthyFoodContainer
        healthyFoods={healthyFoods}
        handleOnchange={handleOnchange}
      />
    </div>
  );
}

export default App;

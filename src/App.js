//import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);

  function createFood(body) {
    body._id = Math.random() * 1000;
    setFoodsList([body, ...foods]);
  }

  function searchBar(string) {
      setFilteredFoods(
        foodsList.filter((food) =>
          food.name.toLowerCase().includes(string.toLowerCase())
        )
      );
  }

  return (
    <div className="App">
      
      <AddFoodForm parentCb={createFood} />

      <Search filteredFoods={searchBar} />
      <h1>Food List</h1>
      <div className="foodContainer">
      {filteredFoods.map((food) => {
        return <FoodBox food={food} />;
      })}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes.jsx";
import AddRecipe from "./components/AddRecipe.jsx";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchRecipes() {
    console.log("getting recipes");
    axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <Recipes recipes={recipes} />
      <AddRecipe fetchRecipes={fetchRecipes} />
    </div>
  );
}

export default App;

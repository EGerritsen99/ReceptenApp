import { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes.jsx";
import AddRecipe from "./components/AddRecipe.jsx";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    const response = await axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, [recipes]);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <Recipes recipes={recipes} />
      <AddRecipe />
    </div>
  );
}

export default App;

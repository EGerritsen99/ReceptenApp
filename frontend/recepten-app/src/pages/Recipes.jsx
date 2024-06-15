import { useEffect, useState } from "react";
import AddRecipe from "../components/AddRecipe";
import axios from "axios";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchRecipes() {
    console.log("getting recipes");
    axios
      .get("http://localhost:8080")
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
    <>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
      <AddRecipe onAdd={() => fetchRecipes()} />
    </>
  );
}

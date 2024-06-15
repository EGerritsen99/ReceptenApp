import { useEffect, useState } from "react";
import axios from "axios";
import AddIngredient from "../components/AddIngredient";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchIngredients() {
    console.log("getting ingredients");
    axios
      .get("http://localhost:8080/ingredients")
      .then((response) => {
        console.log(response.data);
        setIngredients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
      <AddIngredient onAdd={() => fetchIngredients()} />
    </>
  );
}

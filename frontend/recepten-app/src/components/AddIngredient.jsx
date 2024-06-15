import { useState } from "react";
import axios from "axios";

export default function AddIngredient({ onAdd }) {
  const [name, setName] = useState("");

  function addIngredient() {
    console.log("in addIngredient " + name);
    axios
      .post("http://localhost:8080/ingredients", {
        name: name,
      })
      .then(() => {
        onAdd();
      });
  }

  return (
    <div className="add-ingredient">
      <input
        type="text"
        placeholder="Add Ingredient"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button className="add-ingredient-button" onClick={addIngredient}>
        Add
      </button>
    </div>
  );
}

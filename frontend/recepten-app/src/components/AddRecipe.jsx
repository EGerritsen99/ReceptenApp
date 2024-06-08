import { useState } from "react";
import axios from "axios";

export default function AddRecipe() {
  const [title, setTitle] = useState("");

  function addRecipe() {
    console.log("in addRecipe " + title);
    axios.post("http://localhost:8080/recipes", {
      title: title,
    });
  }

  return (
    <div className="add-recipe">
      <input
        type="text"
        placeholder="Add Recipe"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="add-recipe-button" onClick={addRecipe}>
        Add
      </button>
    </div>
  );
}

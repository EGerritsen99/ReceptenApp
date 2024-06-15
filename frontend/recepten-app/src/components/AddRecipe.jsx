import { useState } from "react";
import axios from "axios";

export default function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState("");

  function addRecipe() {
    console.log("in addRecipe " + title);
    axios
      .post("http://localhost:8080/", {
        title: title,
      })
      .then(() => {
        onAdd();
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

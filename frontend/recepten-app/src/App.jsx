import "./App.css";
import Ingredients from "./pages/Ingredients.jsx";
import Recipes from "./pages/Recipes.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </div>
  );
}

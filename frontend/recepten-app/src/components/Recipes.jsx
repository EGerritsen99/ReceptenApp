export default function Recipes({ recipes }) {
  return (
    <ul>
      {recipes.content.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
}

import { useState, useEffect } from "react";
const useRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const results = await response.json();
    setRecipes(results?.recipes);
  };

  return recipes;
};

export default useRecipe;

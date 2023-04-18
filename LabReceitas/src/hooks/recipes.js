import { useState, useEffect } from 'react';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(recipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const selectRecipe = (id) => {
    const selectedRecipe = recipes.find(recipe => recipe.id === id);
    setSelectedRecipe(selectedRecipe);
  };

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (id, updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe));
    setRecipes(updatedRecipes);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return {
    recipes,
    selectedRecipe,
    selectRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe,
  };
};

export default useRecipes;
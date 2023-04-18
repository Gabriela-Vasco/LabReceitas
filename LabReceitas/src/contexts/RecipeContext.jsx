import { createContext, useContext }from 'react';
import useRecipes from '../hooks/recipes'; 

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const recipeStore = useRecipes();

  return (
    <RecipeContext.Provider value={{
      ...recipeStore,
    }}>
      {children}
    </RecipeContext.Provider>
  );
};
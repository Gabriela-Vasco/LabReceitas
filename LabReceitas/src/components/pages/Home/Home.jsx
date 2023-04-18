import { Header, Footer } from "../../organisms";
import { AddRecipeForm, RecipeDetails, RecipeList} from "../../organisms"
import { useState } from 'react'

import "./Home.css"

export default function Home(){
    const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const updateRecipe = (id, updatedRecipe) => {
    setRecipes(recipes.map((recipe) => (recipe.id === id ? updatedRecipe : recipe)));
  }

    return (
        <div>
            <Header />

            <AddRecipeForm 
                addRecipe={addRecipe}
                selectedRecipe={selectedRecipe}
                updateRecipe={updateRecipe}
                setSelectedRecipe={setSelectedRecipe}
            />
            <RecipeList 
                recipes={recipes}
                deleteRecipe={deleteRecipe}
                handleRecipeSelect={handleRecipeSelect}
                setSelectedRecipe={setSelectedRecipe}
            />
            <RecipeDetails recipe={selectedRecipe}/>

            <Footer />
        </div>
    )
}
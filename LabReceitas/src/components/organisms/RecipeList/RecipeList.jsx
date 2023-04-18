import RecipeItem from "../RecipeItem/RecipeItem"

const RecipeList = ({recipes, deleteRecipe, handleRecipeSelect, setSelectedRecipe}) => {
    console.log(recipes);
    return (
        <div>
            <h2>Receitas</h2>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeItem 
                    key={recipe.id}
                    recipe={recipe}
                    deleteRecipe={deleteRecipe}
                    handleRecipeSelect={handleRecipeSelect}
                    setSelectedRecipe={setSelectedRecipe}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default RecipeList;
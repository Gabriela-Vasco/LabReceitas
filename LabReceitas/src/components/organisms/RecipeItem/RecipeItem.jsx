const RecipeItem = ({ recipe, deleteRecipe, handleRecipeSelect, setSelectedRecipe }) => {
    const handleDelete = () => {
        deleteRecipe(recipe.id);
        setSelectedRecipe(null);
    };

    console.log(recipe)
    
    return (
        <div className="recipe-item">
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.preparation}</p>
            <checkbox>{recipe.lactose}</checkbox>
            <checkbox>{recipe.gluten}</checkbox>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={() => handleRecipeSelect(recipe)}>Selecionar</button>
        </div>
    );
};

export default RecipeItem;
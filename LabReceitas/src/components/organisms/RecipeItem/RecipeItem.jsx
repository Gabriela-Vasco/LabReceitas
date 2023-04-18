import { useRecipeContext } from "../../../contexts/RecipeContext";

const RecipeItem = ({ recipe }) => {
    const {deleteRecipe, selectRecipe } = useRecipeContext();

    const handleDelete = () => {
        deleteRecipe(recipe.id);
        selectRecipe(null);
    };
    
    return (
        <div className="recipe-item">
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.preparation}</p>
            <checkbox>{recipe.lactose}</checkbox>
            <checkbox>{recipe.gluten}</checkbox>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={() => selectRecipe(recipe.id)}>Selecionar</button>
        </div>
    );
};

export default RecipeItem;
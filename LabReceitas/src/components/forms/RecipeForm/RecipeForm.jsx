import { useState } from "react";
import "./RecipeForm.css";

export default function RecipeForm() {
    const [recipeData, setRecipeData] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        containsDairy: false,
        containsGluten: false,
    });

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setRecipeData(prevRecipeData => ({
            ...prevRecipeData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        localStorage.setItem("recipe", JSON.stringify(recipeData))
        setRecipeData({
            name: "",
            ingredients: "",
            instructions: "",
            containsDairy: false,
            containsGluten: false,
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" >Nome da Receita:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={recipeData.name}
                />
                <label htmlFor="ingredients">Ingredientes:</label>
                <textarea 
                    name="ingredients"
                    id="ingredients"
                    onChange={handleChange}
                    value={recipeData.ingredients}
                />
                <label htmlFor="instructions">Modo de preparo:</label>
                <textarea 
                    name="instructions"
                    id="instructions"
                    onChange={handleChange}
                    value={recipeData.instructions}
                />
                <label>Restrições:</label>
                <input
                    type="checkbox"
                    name="containsDairy"
                    onChange={handleChange}
                    id="containsDairy"
                    checked={recipeData.containsDairy}
                />
                <label htmlFor="containsDairy">Lactose</label>
                <input
                    type="checkbox"
                    name="containsGluten"
                    id="containsGluten"
                    onChange={handleChange}
                    checked={recipeData.containsGluten}
                />  
                <label htmlFor="containsGluten">Glúten</label>
                <button>Enviar</button>
            </form>
        </div>
    )
}
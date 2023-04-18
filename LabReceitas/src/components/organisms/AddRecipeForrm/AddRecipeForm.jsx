import { useState, useEffect } from "react";
import {useRecipeContext} from "../../../contexts/RecipeContext"

const AddRecipeForm = () => {
    const { addRecipe, selectedRecipe, updateRecipe, selectRecipe } = useRecipeContext();

    const [formValues, setFormValues] = useState({
        name: "",
        ingredients: "",
        preparation: "",
        lactose: false,
        gluten: false
    });

    useEffect(() => {
        if (selectedRecipe) {
            setFormValues({
                name: selectedRecipe.name,
                ingredients: selectedRecipe.ingredients,
                preparation: selectedRecipe.preparation,
                lactose: selectedRecipe.lactose,
                gluten: selectedRecipe.gluten
            });
        }        
    }, [selectedRecipe]);

}
    return (
        <form>
            <fieldset>
                <h1>Adicionar nova receita</h1>
                <label>
                    <input name="Nome" type='text' placeholder="Nome" />
                    <textarea name="Ingredientes" placeholder="Ingredientes" />
                    <textarea name="Modo de preparo" placeholder="Modo de preparo" />
                    <p>Restrições</p>
                    <input name="Lactose" type="checkbox"/>
                    <input name="Glúten" type="checkbox" />
                    <button type="submit">Adicionar</button>
                </label>
            </fieldset>
        </form>
    )

import { useState, useEffect } from "react";

const AddRecipeForm = ({addRecipe, selectedRecipe, updateRecipe, setSelectedRecipe}) => {

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


        const handleSubmit = (e) => {
            e.preventDefault();

            if (selectedRecipe) {
                updateRecipe(selectedRecipe.id, {
                    ...selectedRecipe,
                    name: formValues.name,
                    ingredients: formValues.ingredients,
                    preparation: formValues.preparation,
                    lactose: formValues.lactose,
                    gluten: formValues.gluten
                });
                setSelectedRecipe(null);
            } else {
                addRecipe({
                    id: Date.now(),
                    name: formValues.name,
                    ingredients: formValues.ingredients,
                    preparation: formValues.preparation,
                    lactose: formValues.lactose,
                    gluten: formValues.gluten
                });
            }

            setFormValues({
                name: "",
                ingredients: "",
                preparation: "",
                lactose: false,
                gluten: false
            })
        };
    

            return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Adicionar nova receita</h1>
                    <label>
                        <input 
                        name="Nome" 
                        type='text' 
                        placeholder="Nome" 
                        value={formValues.name}
                        onChange={(e) => 
                            setFormValues({...formValues, name: e.target.value})
                        }/>
                        <textarea 
                        name="Ingredientes" 
                        placeholder="Ingredientes" 
                        value={formValues.ingredients}
                        onChange={(e) => 
                            setFormValues({...formValues, ingredients: e.target.value})
                        }/>
                        <textarea 
                        name="Modo de preparo" 
                        placeholder="Modo de preparo" 
                        value={formValues.preparation}
                        onChange={(e) => 
                            setFormValues({...formValues, preparation: e.target.value})
                        }/>
                        <p>Restrições</p>
                        <input 
                        name="Lactose" 
                        type="checkbox"
                        value={formValues.lactose}
                        onClick={(e) => 
                            setFormValues({...formValues, lactose: e.target.value})
                        }/>
                        <input 
                        name="Glúten" 
                        type="checkbox" 
                        value={formValues.gluten}
                        onClick={(e) => 
                            setFormValues({...formValues, gluten: e.target.value})
                        }/>
                        <button type="submit">
                            {selectedRecipe ? "Atualizar Receita" : "Adicionar Receita"}
                        </button>
                    </label>
                </fieldset>
            </form>
        );
    };

    export default AddRecipeForm;
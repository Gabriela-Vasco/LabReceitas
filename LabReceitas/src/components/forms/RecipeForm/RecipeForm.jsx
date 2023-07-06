import { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import { nanoid } from 'nanoid'
import "./RecipeForm.css";

export default function RecipeForm() {
    const [recipeData, setRecipeData] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        image: "",
        containsDairy: false,
        containsGluten: false,
        id: ""
    });
    const [resizedImage, setResizedImage] = useState(null);
    const [recipesArray, setRecipesArray] = useState(JSON.parse(localStorage.getItem("recipes")) || []) ;

    let recipeWithImage = {
        name: recipeData.name,
        ingredients: recipeData.ingredients,    
        instructions: recipeData.instructions,
        image: resizedImage,
        containsDairy: recipeData.containsDairy,
        containsGluten: recipeData.containsGluten,
        id: recipeData.id
    }

    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(recipesArray));
    }, [recipesArray])

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (imageUri) => {
          resolve(imageUri);
        },
        "base64"
      );
    });

  const onChange = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      setResizedImage(image);
    } catch (err) {
      console.log(err);
    }
  };

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setRecipeData(prevRecipeData => ({
            ...prevRecipeData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        recipeWithImage = {
            name: recipeData.name,
            ingredients: recipeData.ingredients,
            instructions: recipeData.instructions,
            image: resizedImage,
            containsDairy: recipeData.containsDairy,
            containsGluten: recipeData.containsGluten,
            id: nanoid()
        }

        console.log(recipeWithImage)
        setRecipesArray(prevRecipesArray => [...prevRecipesArray, recipeWithImage])


        setRecipeData({
            name: "",
            ingredients: "",
            instructions: "",
            containsDairy: false,
            containsGluten: false,
        })
        setResizedImage(null);
        window.location.reload();
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
                <br/>
                <label htmlFor="imageUpload" id="uploadLabel">Adicione uma imagem</label>
                <input
                    type="file"
                    name="imageUpload"
                    id="imageUpload"
                    accept="image/*"
                    onChange={onChange} 
                />
                <br />
                <label>Restrições:</label>
                <div className="checkboxes">
                <input
                    type="checkbox"
                    name="containsDairy"
                    onChange={handleChange}
                    id="containsDairy"
                    checked={recipeData.containsDairy}
                />
                <label htmlFor="containsDairy">Lactose</label>
                </div>
                <div className="checkboxes">
                <input
                    type="checkbox"
                    name="containsGluten"
                    id="containsGluten"
                    onChange={handleChange}
                    checked={recipeData.containsGluten}
                />  
                <label htmlFor="containsGluten">Glúten</label>
                </div>
                <br />
                <button>Enviar</button>
            </form>
        </div>
    )
}
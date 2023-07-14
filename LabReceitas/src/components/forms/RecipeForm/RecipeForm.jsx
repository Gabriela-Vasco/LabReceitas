import { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import { nanoid } from 'nanoid'
import "./RecipeForm.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
    const [selectedFile, setSelectedFile] = useState(null);

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

    const notify = () => toast("Receita cadastrada com sucesso!");

  const onChange = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      setResizedImage(image);
      setSelectedFile(file)
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
        setSelectedFile(null);
        notify()
        window.location.reload()
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="recipe-form">
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
                <label htmlFor="imageUpload" id="uploadLabel">
                    {selectedFile ? selectedFile.name : "Adicionar Imagem"}
                </label>
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
                <label htmlFor="containsDairy">
                    <svg viewBox="0 0 100 100">
                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                    </svg>
                    <span>Lactose</span>
                </label>
                </div>
                <div className="checkboxes">
                <input
                    type="checkbox"
                    name="containsGluten"
                    id="containsGluten"
                    onChange={handleChange}
                    checked={recipeData.containsGluten}
                />  
                <label htmlFor="containsGluten">
                    <svg viewBox="0 0 100 100">
                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                    </svg>
                    <span>Glúten</span>
                </label>
                </div>
                <br />
                <button className="form-button">Enviar</button>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnHover={false}
                    theme="light"
                />
            </form>
        </div>
    )
}
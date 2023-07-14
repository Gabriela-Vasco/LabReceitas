import { useParams, Link } from "react-router-dom"
import { useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import lactose from "../../assets/milk.png"
import gluten from "../../assets/gluten.png"
import "./RecipeDetails.css"

export default function RecipeDetails(){
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || []) ;
    const {id} = useParams();

    const recipe = recipes?.find((recipe) => recipe.id === id);
    
   
     


    return (
        <div className="recipe-details-container" > 
            <Header />
            {recipe ? (
                <div className="recipe-details" key={id}>
                    <br />
                    <img src={recipe.image} alt={recipe.name} className="img-recipe-details"/>
                    <div className="recipe-details-text">
                        <br />    
                        <h1>{recipe.name}</h1>
                        <strong>Ingredientes:</strong>
                        <span>{` ${recipe.ingredients}`}</span>
                        <br />
                        <br />
                        <strong>Modo de preparo:</strong>
                        <span>{` ${recipe.instructions}`}</span>
                        <br />
                        <div className="restrictions">
                            <span>{recipe.containsDairy && "Contém Lactose"}</span>
                            {recipe.containsDairy && <img src={lactose}/>}
                        </div>
                        <br />
                        <div className="restrictions">
                            <span className="restricoes">{recipe.containsGluten && "Contém Glúten"}</span>
                            {recipe.containsGluten && <img src={gluten}/>}
                        </div>
                    </div>
                </div>
            ) : 
                <span>Receita não encontrada, clique<Link to="/">aqui</Link>para voltar para a página inicial</span>
            }
            <Footer />
        </div>
    )
}
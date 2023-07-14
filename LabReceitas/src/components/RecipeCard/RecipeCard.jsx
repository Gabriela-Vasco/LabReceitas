import { Link } from "react-router-dom"
import "./RecipeCard.css"

export default function RecipeCard({ id, name, image, handleDelete}) {
    return (
        <div className="recipe-card" key={id}>
            <button className="delete-button" onClick={handleDelete}>X</button>
            <Link to={`/recipe/${id}`}>
            <img src={image} alt={name} className="img-recipe-card"/>
            <h1>{name}</h1>
            </Link>
        </div>
    )
}
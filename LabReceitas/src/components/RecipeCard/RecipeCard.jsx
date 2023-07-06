import "./RecipeCard.css"

export default function RecipeCard({ name, ingredients, instructions, image, containsDairy, containsGluten}) {
    return (
        <div className="recipe-card">
            <img src={image} alt={name} />
            <br />
            <h1>{name}</h1>
            <hr />
            <div className="span-container">
                <strong>Ingredientes:</strong>
                <span>{ingredients}</span>
                <br />
                <strong>Modo de preparo:</strong>
                <span>{instructions}</span>
                <br />
                <span className="restricoes">{containsDairy && "Contém Lactose"}</span>
                <br />
                <span className="restricoes">{containsGluten && "Contém Glúten"}</span>
            </div>
        </div>
    )
}
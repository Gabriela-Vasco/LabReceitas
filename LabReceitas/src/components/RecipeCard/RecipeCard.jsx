import "./RecipeCard.css"

export default function RecipeCard({ name, ingredients, instructions, image, containsDairy, containsGluten}) {
    return (
        <div className="recipe-card">
            <img src={image} alt={name} />
            <br />
            <h1>{name}</h1>
            <span>{ingredients}</span>
            <br />
            <span>{instructions}</span>
            <br />
            <span>{containsDairy && "Contém Lactose"}</span>
            <br />
            <span>{containsGluten && "Contém Glúten"}</span>
        </div>
    )
}
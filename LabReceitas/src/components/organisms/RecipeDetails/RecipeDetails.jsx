

const RecipeDetails = ({recipe}) => {
    return (
        <div>
            {recipe ? (
                <>
                    <h2>{selectedRecipe.name}</h2>
                    <p>{selectedRecipe.ingredients}</p>
                    <p>{selectedRecipe.preparation}</p>
                    
                </>    
            ) : (
                <p>Selecione uma receita para visualizar os detalhes</p>
            )
        }

        </div>
    );
};

export default RecipeDetails;
import { useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchBar from "../../components/forms/SearchBar/SearchBar";

import "./Home.css"

const filterRecipes = (recipes, query) => {
  if (!query) {
      return recipes;
  }

  return recipes.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(query);
  });
}

export default function Home() {
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes")) || []) ;
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredRecipes = filterRecipes(recipes, searchQuery);
    const [containsGluten, setContainsGluten] = useState(false);
    const [containsDairy, setContainsDairy] = useState(false);

    const handleDelete = (id) => {
      const newRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(newRecipes);
      localStorage.setItem("recipes", JSON.stringify(newRecipes));
    }

  return (
    <div className="home">
      <div className='header-wrapper'>
        <Header />
      </div>

      <div className="filter-options">
        <span>Filtre as receitas:</span>
        <div className="checkboxes-filter">
          <input
            type="checkbox"
            name="containsDairy"
            onChange={(e) => setContainsDairy(e.target.checked)}
            id="containsDairy"
            checked={containsDairy}
          />
          <label htmlFor="containsDairy">
            <svg viewBox="0 0 100 100">
              <path className="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z" />
              <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5" />
            </svg>
            <span>Sem lactose</span>
          </label>
        </div>
        <div className="checkboxes-filter">
          <input
            type="checkbox"
            name="containsGluten"
            onChange={(e) => setContainsGluten(e.target.checked)}
            id="containsGluten"
            checked={containsGluten}
          />
          <label htmlFor="containsGluten">
            <svg viewBox="0 0 100 100">
              <path className="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z" />
              <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5" />
            </svg>
            <span>Sem glúten</span>
          </label>
        </div>
      </div>
      
      <SearchBar 
        className='search-bar'
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <section className='card-catalog'>
        {filteredRecipes?.map(recipe => {
          if ((containsGluten && recipe.containsGluten) || (containsDairy && recipe.containsDairy)) {
            return null; 
          }
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              image={recipe.image}
              containsDairy={recipe.containsDairy}
              containsGluten={recipe.containsGluten}
              handleDelete={() => handleDelete(recipe.id)}
            />
          );
        })}
      </section> 

      <Footer />
    </div>
  );
}

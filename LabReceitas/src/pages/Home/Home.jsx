import { useState, useEffect } from "react";
import RecipeForm from "../../components/forms/RecipeForm/RecipeForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";


export default function Home() {
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem("recipes"))) ;
    console.log(recipes)
  return (
    <>
      <Header />
      <section className='card-catalog'>
                {recipes?.map(item => {
                        return (
                            <RecipeCard 
                                key={item.id}
                                name={item.name}
                                ingredients={item.ingredients}
                                instructions={item.instructions}
                                image={item.image}
                                containsDairy={item.containsDairy}
                                containsGluten={item.containsGluten}
                            />
                        )
                    })}
            </section>
      <RecipeForm />
      <Footer />
    </>
  );
}

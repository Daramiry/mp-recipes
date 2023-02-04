import React from 'react';
import "./styles.css";
import RecipeCard from "../RecipeCard";

function RecipeContainer() {
  const [meals] = React.useState([]);
  // return (
  //   <div className='recipe-container'>
  //       {recipes.map((recipe) => (
  //           <RecipeCard  key={recipe.idRecipe} {...recipe}/>
  //       ))}
  //   </div>
  // );
  return (
    <div className='recipe-container'>
      <RecipeCard key={meals.idMeal} {...meals} />
    </div>
  )
}

export default RecipeContainer;
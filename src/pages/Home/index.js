import {useEffect} from 'react';
import Jumbo from '../../Components/Jumbo';
import RecipeContainer from '../../Components/RecipeContainer';
import React, { useContext }  from 'react';
import { MyContext } from '../../context';


function Home() {
  const {meals, setMeals} = useContext(MyContext)
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
        <Jumbo /> 
        <RecipeContainer meals={meals} />
    </div>
  )
}

export default Home;
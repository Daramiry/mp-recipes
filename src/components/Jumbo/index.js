import React, {useState, useContext} from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context"
import axios from "axios"

function Jumbo() {
  const [searchInput, setsearchInput] = useState("");
  const {setMeals} = useContext(MyContext)
  function handleSearch(){
      axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((({data})=> setMeals(data.meals)))
  }

  return (
  <div className="jumbo">
    <h1 id="header1">Welcome</h1>
    <div className="button-input">
       <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a Recipe"
          aria-label="Recipe Searcher"
          aria-describedby="recipe-finder"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <Button variant="danger" id="recipe-finder" onClick={handleSearch}>
          Get to Cooking!
        </Button>
      </InputGroup>
    </div>
    <h2 id="header2">Find the best recipes here!</h2>
  </div>
  );

}

export default Jumbo;
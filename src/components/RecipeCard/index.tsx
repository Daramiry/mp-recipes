import React from 'react';
import {Card} from "react-bootstrap";
import{ Button } from "react-bootstrap"

function RecipeCard({strRecipe}: any) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{strRecipe}</Card.Title>
                <Button variant="primary">Yummy</Button>
            </Card.Body>
    </Card>
  );
  }

export default RecipeCard
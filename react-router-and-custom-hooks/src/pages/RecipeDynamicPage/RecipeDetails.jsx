

import React from 'react'
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const params = useParams();
    console.log(params?.id);
    
  return (
    <div>
      <h3>Recipe Details {params?.id}</h3>
    </div>
  )
}

export default RecipeDetails;

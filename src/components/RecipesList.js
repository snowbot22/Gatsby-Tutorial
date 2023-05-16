import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slugify from 'slugify'

function RecipesList( {recipes = []} ) {
  return (
    <div className='recipes-list'>
        {
            recipes.map((recipe)=>{
                const {id, title, image, prepTime, cookTime} = recipe;
                const pathToImage = getImage(image);
                const slug = Slugify(title, {lower: true});
                return <Link key={id} to={`/${slug}`} className='recipe'> 
                    <GatsbyImage image={pathToImage} className='recipe-img' alt={title} />
                    <h5>{title}</h5>
                    <p>Prep : {prepTime}min | Cook : {cookTime}min</p>
                </Link>
            })
        }
    </div>
  )
}

export default RecipesList
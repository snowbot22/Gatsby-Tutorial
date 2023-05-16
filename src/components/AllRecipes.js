import React from 'react'
import TagList from './TagList'
import { graphql, useStaticQuery } from 'gatsby'
import RecipesList from './RecipesList'

const query = graphql`
query {
  allContentfulRecipe(sort: {title: ASC}) {
    nodes {
      id
      title
      cookTime
      prepTime
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`

function AllRecipes() {
  
    const data = useStaticQuery(query);
    let recipes = data.allContentfulRecipe.nodes;

  return (
    <section className='recipes-container'>
        <TagList recipes={recipes} />
        <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
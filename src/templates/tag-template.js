import React from 'react'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout';

function TagTemplate({data, pageContext}) {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <h2>
        {pageContext.tag}
      </h2>
      <div className='tags-recipes'>
        <RecipesList recipes={recipes} />
      </div>
    </Layout>
  )
}

export const query= graphql`
query ($tag: String) {
  allContentfulRecipe(filter: {content: {tags: {eq: $tag}}}, sort: {title: ASC}) {
    nodes {
      title
      id
      cookTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
  site {
    siteMetadata {
      title
      author
      description
    }
  }
}
`

export function Head ({data, pageContext}){

  const {site} = data;
  const {tag} = pageContext;
  return (
    <>
        <title> {`${tag} | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}

export default TagTemplate
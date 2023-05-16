import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql} from 'gatsby';
import RecipesList from '../components/RecipesList';

const about = ({data}) => {
  let recipes = data.allContentfulRecipe.nodes;
  console.log(recipes);
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2> I'm baby coloring book poke taxidermy </h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.    
            </p>
            <Link to='/contact' className='btn'>Contact</Link>
          </article>
          <StaticImage src="../assets/images/about.jpeg" alt='info-image' className='about-img' placeholder='blurred' >
          </StaticImage>
        </section>
        <section className='featured-recipes'>
          <h5> Look at this AwesomeSauce! </h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query =  graphql`
query {
  allContentfulRecipe(sort: {title: ASC}, filter: {featured: {eq: true}}) {
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
  site {
    siteMetadata {
      title
      author
      description
    }
  }
}
`

export function Head ({data}){

  const {site} = data;

  return (
    <>
        <title> {`Home | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}

export default about
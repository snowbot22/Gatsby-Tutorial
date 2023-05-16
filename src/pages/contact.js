import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

export default function contact({data}) {

  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>  
            <h3>
              Want To Get In Touch?
            </h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>
              Cardigan prism bicycle rights put a bird on it deep v.
            </p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className='form contatc-form' action="https://formspree.io/f/xbjeblro" method="POST">
              <div className='form-row'>
                <label htmlFor='name'>
                  Your name
                </label>
                <input type="text" name="name" id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>
                  Your email
                </label>
                <input type="text" name="email" id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>
                  Message
                </label>
                <textarea name="message" id='message' cols="30" rows="10" />
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
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
        <title> {`Contact | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}
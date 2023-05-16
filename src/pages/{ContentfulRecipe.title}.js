import React from 'react'
import { graphql,Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs'
import Layout from '../components/Layout'
import slugify from 'slugify'

export default function RecipeTemplate({data}) {
  console.log(data);
  const {
    title, 
    cookTime, 
    content, 
    description:{description}, 
    image,
    prepTime,
    servings
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);
  const {tags, ingredients, instructions} = content;

  return (
    <Layout>
        <main className='page'>
        <div className='recipe-page'>
            <section className='recipe-hero'>
              <GatsbyImage image={pathToImage} alt={title} className='about-img' />
              <article className='recipe-info'>
                <h2>
                  {title}
                </h2>
                <p>{description}</p>
                <div className='recipe-icons'>
                  <article>
                    <BsClock />
                    <h5>prep time</h5>
                    <p>{prepTime} min.</p>
                  </article>
                  <article>
                    <BsClockHistory />
                    <h5>cook time</h5>
                    <p>{cookTime} min.</p>
                  </article>
                  <article>
                    <BsPeople />
                    <h5>serving</h5>
                    <p>{servings}</p>
                  </article>
                </div>
                <p className='recipe-tags'>
                  Tags: {tags.map((tag,index)=>{
                    const slug = slugify(tag, {lower: true});
                    return <Link to={`/tags/${slug}`} key={index+ tag}>
                      {tag}
                    </Link>
                  })}
                </p>
              </article>
            </section>
            <section className='recipe-content'>
              <article>
                <h4>
                  instructions
                </h4>
                {
                  instructions.map((item,index)=>{
                    return <div key={item + index} className='single-instruction'> 
                      <header>
                        <p>
                          step {index + 1}
                        </p>
                      </header>
                      <p>{item}</p>
                    </div>
                  })
                }
              </article>
              <article className='second-column'>
                <div>
                  <h4>
                    ingredients
                  </h4>
                  {
                      ingredients.map((item,index)=>{
                        return <p key={index + item} className='single-ingredient'>
                          {item}
                        </p>
                      }
                      )
                    }
                </div>
                <div>

                </div>
              </article>
            </section>
        </div>
        </main>
    </Layout>
  )
}

export const query =  graphql`
query ($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    prepTime
    servings
    content {
      ingredients
      instructions
      tags
    }
    description {
      description
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
  const {title} = data.contentfulRecipe;

  return (
    <>
        <title> {`${title} | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}


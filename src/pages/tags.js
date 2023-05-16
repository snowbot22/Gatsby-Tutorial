import React from 'react';
import Layout from '../components/Layout';
import { graphql,Link } from 'gatsby';
import setupTags from '../utils/setupTags';
import slugify from 'slugify';

function tags({data}) {

  const newTags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
        <main className='page'>
          <section className='tags-page'>
            {newTags.map((tag, index)=>{
              const [text, value] = tag;
              const slug = slugify(text, {lower: true})
              return <Link key={index + tag} to={`/tags/${slug}`} className='tag'>
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            }
            )}
          </section>
        </main>
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulRecipe {
    nodes {
      content {
        tags
      }
    }
  }site {
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
        <title> {`Tags | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}

export default tags
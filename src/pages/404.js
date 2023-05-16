import React from 'react';
import Layout from '../components/Layout';
import { graphql,useStaticQuery } from 'gatsby';


const errorPage = () => {
  return (
    <Layout>
      <main className='error-page'>
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}


const seoQuery = graphql`
query {
  site {
    siteMetadata {
      title
      author
      description
    }
  }
}
`

export function Head (){

  const {site} = useStaticQuery(seoQuery);

  return (
    <>
        <title> {`Error | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )
}

export default errorPage
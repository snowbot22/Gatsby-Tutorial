import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql,useStaticQuery } from "gatsby";
import AllRecipes from "../components/AllRecipes";

export default function Home() {

  return(
    <Layout> ;
      <main className="page">
        <header className="hero">
          <StaticImage  src="../assets/images/about.jpeg" alt="main-image" placeholder="tracedSVG" className="hero-img" layout="fullWidth">
          </StaticImage>
          <div className="hero-container">
          <div className="hero-text">
            <h1>
              Simply recipes
            </h1>
            <h4>
              No fluff, just recipes
            </h4>
          </div>
        </div>  
        </header>
        <AllRecipes />
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

export function Head ({data}){
  
  const {site} = useStaticQuery(seoQuery);

  return (
    <>
        <title> {`Home | ${site.siteMetadata.title} `}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content={site.siteMetadata.author} />
    </>
  )

  
}
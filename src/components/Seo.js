import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query =  graphql`
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

function Head({title}) {

  const {site} = useStaticQuery(query);

  return (
    <>
        <title>`${title} | ${site.siteMetadata.title} `</title>
    </>
  )
}

export default Head
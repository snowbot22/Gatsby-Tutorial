import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    query QueryMetaData {
      page: site {
        info: siteMetadata {
          author
        }
      }
    }
  `)
  return <h2>{data.page.info.author}</h2>
}

export default ComponentName


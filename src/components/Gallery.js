import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: false}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`


function Gallery() {

  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  console.log(data);

  return (
    <div>
      <main className='page'> 
        <Wrapper>
            {nodes.map((image,index)=>{
              const {name} = image;
              const pathToImage = getImage(image);
              return <article key={index} className='item'>
                <p>
                  {name}
                </p>
                <GatsbyImage image={pathToImage} alt={name} className='gallery-img'/>
              </article> 
            })}
        </Wrapper>
      </main>
    </div>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  .item{
    margin: 1rem;
  }
  .gallery-img{
    border-radius: 1rem;
  }
`
  

export default Gallery
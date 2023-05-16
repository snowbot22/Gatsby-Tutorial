import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";
import Big from '../assets/images/big.webp';

function Images() {
  return (
    <Wrapper>
      <div>
        <h2>
          Constrain image
        </h2>
        <StaticImage src="../assets/images/big.webp" alt='hero-image' height={600} placeholder="blurred" layout="constrained" className='figure' imgClassName='img--large' />
      </div>
      <div>
        <h2>
          Fixed image
        </h2>
        <StaticImage src="../assets/images/big.webp" alt='hero-image' height={600} placeholder="tracedSVG" layout="fixed" className='figure' imgClassName='img--large' />
      </div>
      <div>
        <h2>
          Fullwidth image
        </h2>
        <StaticImage src="../assets/images/big.webp" alt='hero-image' height={600} placeholder="dominantColor" layout="fullWidth" className='figure' imgClassName='img--large' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: greenyellow;
  .img--large{
    width: 100%;
    background-color: blue;
  }
  

`

export default Images
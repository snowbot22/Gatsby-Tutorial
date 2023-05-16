import React from 'react'

function Footer() {
  return (
    <footer className='page-footer'>
        <p>
            &copy; {new Date().getFullYear()} <span>Simple Recipies</span>. 
            Built with <a href='https://www.gatsbyjs.com/' target={'_blank'} rel={"noreferrer"}>Gatsby</a>
        </p>
    </footer>
  )
}

export default Footer
import React from 'react'
import {Link} from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

function TagList({recipes}) {

  const newTags = setupTags(recipes)
  console.log(newTags);
  return (
    <div className='tag-container'>
      <h4>recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag, index)=>{
          const [text, value] = tag;
          const slug = slugify(text, {lower: true})
          return <Link key={index + tag} to={`/tags/${slug}`}>
            {text} ({value})
          </Link>
        }
        )}
      </div>
    </div>
  )
}

export default TagList
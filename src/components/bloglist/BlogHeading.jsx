import React from 'react'
import SectionHeading from '../SectionHeading'

const BlogHeading = () => {
    const title = 'Blog & Article';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
  return (
    <div>
        <SectionHeading title={title} description={description}/>
    </div>
  )
}

export default BlogHeading
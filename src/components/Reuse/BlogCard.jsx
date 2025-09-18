import React from 'react'
import H5 from '../../elements/Heading/H5'
import P1 from '../../elements/Description/P1'
import User2 from '../User2'

const BlogCard = ({blog_img,blog_title,author_name,author_img,blog_description,published_date}) => {
  return (
    <div className='flex items-center gap-[40px]'>
        <div className='w-[290px] h-[200px] rounded-xl overflow-hidden'>
            <img src={blog_img} alt={blog_title} className='w-full h-full object-fill'/>
        </div>
        <div className='space-y-2'>
            <H5>{blog_title}</H5>
            <P1>{blog_description}</P1>
            <User2 userImg={author_img} name={author_name} data={published_date}/>
        </div>
    </div>
  )
}

export default BlogCard
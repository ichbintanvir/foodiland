import React from 'react'
import SectionHeading from '../SectionHeading'
import Button from '../Button';

const Instagram = () => {
    const title = 'Check out @foodieland on Instagram';
    const description = 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim';
  return (
    <div className='py-[80px]'>
        <SectionHeading title={title} description={description}/>
        <div className='py-[80px]'></div>
        <div className='flex justify-center'>
            <Button variety='btn2' status='instagram' className={`bg-black text-white`}>Visit Our Instagram</Button>
        </div>
    </div>
  )
}

export default Instagram
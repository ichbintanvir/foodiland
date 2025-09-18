import React from 'react'
import P1 from '../elements/Description/P1'
import H2 from '../elements/Heading/H2'

const SectionHeading = ({title,description}) => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col justify-center space-y-6'>
            <H2 className={`text-center`}>{title}</H2>
            <P1 className={`max-w-[620px] text-center mx-auto`}>{description}</P1>
        </div>
    </div>
  )
}

export default SectionHeading
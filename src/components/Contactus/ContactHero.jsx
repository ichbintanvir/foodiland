import React from 'react'
import ContactForm from './ContactForm'

const ContactHero = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-[40px] p-10'>
        <div className=''>
            <img src="/chefthums.svg" alt="chef"  className='w-full max-h-[472px] object-fill'/>
        </div>
        <div className='col-span-2'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactHero
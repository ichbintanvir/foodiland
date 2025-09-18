import React from 'react'
import ContactHero from '../components/Contactus/ContactHero'
import Subscriber from '../components/Reuse/Subscriber'
import RecommendRecipes from '../components/Reuse/RecommendRecipes'

const ContactUsPage = () => {
  return (
    <div>
        <ContactHero/>
        <Subscriber/>
        <div className="py-10 space-y-10">
        <RecommendRecipes headingTitle='Check out the delicious recipe' lastIndex={4} />
      </div>
    </div>
  )
}

export default ContactUsPage
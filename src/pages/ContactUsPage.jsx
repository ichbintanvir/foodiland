import React from 'react'
import ContactHero from '../components/Contactus/ContactHero'
import Subscriber from '../components/Reuse/Subscriber'
import RecommendRecipes from '../components/Reuse/RecommendRecipes'
import { Helmet } from 'react-helmet'

const ContactUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>ContactUs Page</title>
        <meta name="description" content="Welcome to the contactus page" />
      </Helmet>
        <ContactHero/>
        <Subscriber/>
        <div className="py-10 space-y-10">
        <RecommendRecipes headingTitle='Check out the delicious recipe' lastIndex={4} />
      </div>
    </div>
  )
}

export default ContactUsPage
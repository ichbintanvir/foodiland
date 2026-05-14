import { Helmet } from 'react-helmet'
import HeroSection from '../components/AboutUs/HeroSection'
import JoinUsSection from '../components/AboutUs/JoinUsSection'
import MissionSection from '../components/AboutUs/MissionSection'
import OfferingsSection from '../components/AboutUs/OfferingsSection'
import PhilosophySection from '../components/AboutUs/PhilosophySection'

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>AboutUs Page</title>
        <meta name="description" content="Welcome to the aboutUs page" />
      </Helmet>
      <main className="font-sans">
        <HeroSection />
        <MissionSection />
        <OfferingsSection />
        <PhilosophySection />
        <JoinUsSection />
      </main>
    </div>
  )
}

export default AboutUsPage
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import AboutSection from '../components/AboutSection'
import Schedule from '../components/Schedule'
import Overview from '../components/Overview'
import Techsandhya from '../components/Techsandhya'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CountdownTimer />
            <AboutSection />
            {/* <Schedule /> */}
            <Overview />
            <Techsandhya />
            <Sponsors />
            <Footer/>
        </>
    )
}

export default Home

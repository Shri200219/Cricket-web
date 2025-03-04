import React, { useEffect, useRef, useState } from 'react'
import { Header } from './components/Header'
import { Stack } from 'react-bootstrap'
import StatsData from './sections/StatsData'
import CallBenefits from './sections/CallBenefits'
import CallEligibility from './sections/CallEligibility'
import FreeCallDoubts from './sections/FreeCallDoubts'
import AboutMe from './sections/AboutMe'
import { FAQ } from './sections/FAQ'
import Footer from './sections/Footer'
import Gallery from './sections/Gallery'
import Testimonial from './sections/Testimonial'
import Strategy from './sections/Strategy'
import { HeroSection } from './sections/HeroSection'
import Typography from './components/Typography'


const LandingPage = () => {
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToRefs = {
    galleryRef,
    aboutRef,
    testimonialRef,
  }


  return (
    <>
    
      {/* <Header scrollToRefs={scrollToRefs} /> */}
      <Stack direction='vertical' gap={3}>
        <HeroSection />
        <StatsData />
        <CallBenefits />
        <CallEligibility />
        <div ref={aboutRef}><AboutMe /></div>
        <FreeCallDoubts />
        {/* <Strategy /> */}
        <div ref={galleryRef}><Gallery /></div>
        <div ref={testimonialRef}><Testimonial /></div>
        <FAQ />
        <Footer />
      </Stack>
    </>
  )
}

export default LandingPage
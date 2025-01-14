import React from 'react'
import { Header } from './components/Header'
import { Container, Stack } from 'react-bootstrap'
import SectionFirst from './sections/sectionFirst'
import StatsSection from './sections/StatsSection'
import SectionSecond from './sections/SectionSecond'
import SectionThird from './sections/SectionThird'
import SectionFourth from './sections/SectionFourth'
import AbourMe from './sections/AbourMe'
import SectionFive from './sections/SectionFive'
import Footer from './sections/Footer'
import Gallery from './sections/Gallery'
import Testimonial from './sections/Testimonial'
import Strategy from './sections/Strategy'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Stack direction='vertical' gap={3}>
        <SectionFirst />
        <StatsSection />
        <SectionSecond />
        <SectionThird />
        <AbourMe />
        <SectionFourth />
        <Strategy />
        <Gallery />
        <SectionFive />
        <Testimonial />
        <Footer />
      </Stack>
    </>
  )
}

export default LandingPage
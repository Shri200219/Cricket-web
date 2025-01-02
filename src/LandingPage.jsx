import React from 'react'
import { Header } from './components/Header'
import { Container } from 'react-bootstrap'
import SectionFirst from './sections/sectionFirst'
import StatsSection from './sections/StatsSection'
import SectionSecond from './sections/SectionSecond'
import SectionThird from './sections/SectionThird'
import SectionFourth from './sections/SectionFourth'
import AbourMe from './sections/AbourMe'
import SectionFive from './sections/SectionFive'

const LandingPage = () => {
  return (
    <>

    <Header/>
    <SectionFirst/>
    <StatsSection/>
    <SectionSecond/>
    <SectionThird/>
    <AbourMe/>
    <SectionFourth/>
    <SectionFive/>
    </>
  )
}

export default LandingPage
import React from 'react'
import { Header } from './components/Header'
import { Container } from 'react-bootstrap'
import SectionFirst from './sections/sectionFirst'
import StatsSection from './sections/StatsSection'
import SectionSecond from './sections/SectionSecond'
import SectionThird from './sections/SectionThird'

const LandingPage = () => {
  return (
    <>

    <Header/>
    <SectionFirst/>
    <StatsSection/>
    <SectionSecond/>
    <SectionThird/>
    </>
  )
}

export default LandingPage
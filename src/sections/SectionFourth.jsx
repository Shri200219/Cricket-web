import React from 'react'
import { Container } from 'react-bootstrap'
import Typography from '../components/Typography'

const SectionFourth = () => {
  return (
    <>
    <Container className='py-3'>
    <Typography variant={'h2'} className={'text-center fs-1 fw-bold'} >
    Still Wondering If One on One Free Call is For You?
    </Typography>
    <Typography className='lh-lg text-center px-md-5 px-sm-0'>
    " The choice is clear: if you want to support your aspiring young cricketer in
    pursuing their dreams, the key lies in building their mental strength. Help
    them overcome the fear of failure, excel under pressure in critical moments,
    and cultivate a strong self-belief and self-image. These traits will not only
    boost their performance on the field but also empower them off the field.
    Taking action to strengthen their mindset is essential—before setbacks
    hinder their potential "
    </Typography>
    <hr className='m-auto w-25'/>
    </Container>
    </>
  )
}

export default SectionFourth
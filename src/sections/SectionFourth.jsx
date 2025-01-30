import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import Typography from '../components/Typography'
import { SharedButton } from '../components/SharedButton'
import { useNavigate } from 'react-router'

const SectionFourth = () => {
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };
  return (
    <>
    <div className='py-5'>
    <Container data-aos="fade-up">
    <Typography variant={'h2'} className={'text-center text-dark fw-bold fs-1 fw-bold'} >
    Still Wondering If One on One Free Call is For You?
    </Typography>
    <Typography className='lh-lg text-center px-md-5 text-dark fw-bold px-sm-0'>
    " The choice is clear: if you want to support your aspiring young cricketer in
    pursuing their dreams, the key lies in building their mental strength. Help
    them overcome the fear of failure, excel under pressure in critical moments,
    and cultivate a strong self-belief and self-image. These traits will not only
    boost their performance on the field but also empower them off the field.
    Taking action to strengthen their mindset is essential—before setbacks
    hinder their potential "
    </Typography>
    <hr className='m-auto w-25'/>
    <Stack direction='horizontal' className='justify-content-center'>
      <SharedButton
         size="lg"
         className="fw-bold rounded-pill glow-on-hover"
         label="Book Your One-On-One Call for ₹ 499"
         onClick={handleNavigateToContactUs}
         />
          </Stack>
    </Container>
   
          </div>
    </>
  )
}

export default SectionFourth
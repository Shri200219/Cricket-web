import React, { useEffect } from 'react'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import Typography from './Typography'
import { SharedButton } from './SharedButton'
import Aos from 'aos'

export const ThankYou = () => {
   useEffect(() => {
          Aos.init({
              duration: 2000,
              offset: 0,
              once: true,
          })
      });

  return (
   <>
     <div className='bg-dark'>
        <Container>
        <Row>
            <Col md={6} sm={12} lg={6} className="order-sm-1"  data-aos="fade-up" data-aos-duration="5000">
            <Stack direction={'vertical'} gap={3} className='vh-100 justify-content-center align-items-center'>
                <Typography variant={'h1'} className={"fs-md-1 w-75"}>
                You are just one step away from our one-on-one Call 
                </Typography>
                <SharedButton label={'Join Whatsapp Group Now'}  className=" w-75 fw-bold rounded-pill btn-md-lg glow-on-hover" />
            </Stack>
            </Col>

            <Col md={6} sm={12} lg={6} className='order-md-first'   data-aos="fade-down"   data-aos-duration="5000">
            <Stack direction={'vertical'} gap={3} className='vh-100 justify-content-center align-items-center p-5'>
              <Image src="./ThankyouImage.png" width={300} height={300} rounded thumbnail/>
            </Stack>
            </Col>
            </Row>
        </Container>
     </div>
   </>
  )
}

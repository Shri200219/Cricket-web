import React from 'react'
import { Container, Stack, Col, Row } from 'react-bootstrap'
import Typography from '../components/Typography'

const StatsData = () => {
  return (
    <>
      <Container data-aos="zoom-in" className='py-4'>
        <Row>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center  border-end align-items-center'>

              <Typography variant={'h2'} className={'mb-0 text-center fw-bold text-dark'}>
                Worked for <span className='fw-bolder text-dark-red fs-large'>3 </span> State
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} >
                Ranji Trophy Teams
              </Typography>
            </Stack>
          </Col>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center  border-end align-items-center'>

              <Typography variant={'h2'} className={'mb-0 text-center fw-bold text-dark'}>
                Trained over <span className='text-dark-red fs-large'>500</span>
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} color={'danger'}>
                Cricketers
              </Typography>
            </Stack>
          </Col>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center  align-items-center'>

              <Typography variant={'h2'} className={'mb-0 text-center fw-bold text-dark'}>
                Worked with <span className='text-dark-red fs-large'>20+</span>
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} color={'danger'}>
                IPL Cricketers
              </Typography>
            </Stack>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default StatsData
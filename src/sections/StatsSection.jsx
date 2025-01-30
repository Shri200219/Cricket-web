import React from 'react'
import { Stack, Col, Row } from 'react-bootstrap'
import Typography from '../components/Typography'

const StatsSection = () => {
  return (
    <>
      <div className='container py-4' data-aos="zoom-in">
        <Row>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 border-end align-items-center'>

              <Typography variant={'h3'} className={'mb-0 text-center fw-bold text-dark'}>
                Worked for <span className='fw-bolder text-dark-red fs-1'>3 </span> State
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} color={'danger'} >
                Ranji Trophy Teams
              </Typography>
            </Stack>
          </Col>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 border-end align-items-center'>

              <Typography variant={'h3'} className={'mb-0 text-center fw-bold text-dark'}>
                Trained over <span className='text-dark-red fs-1'>500</span>
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} color={'danger'}>
                Cricketers
              </Typography>
            </Stack>
          </Col>
          <Col md={4} sm={12}>
            <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 align-items-center'>

              <Typography variant={'h3'} className={'mb-0 text-center fw-bold text-dark'}>
                Worked with <span className='text-dark-red fs-1'>20+</span>
              </Typography>
              <Typography variant={'p'} className={'text-center text-danger fs-4'} color={'danger'}>
                IPL Cricketers
              </Typography>
            </Stack>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default StatsSection
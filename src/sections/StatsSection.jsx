import React from 'react'
import { Stack,Col, Row } from 'react-bootstrap'
import Typography from '../components/Typography'

const StatsSection = () => {
  return (
    <>
    <div className='stat-box container p-3'>
    <Row>
    <Col md={4} sm={12}>
     <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 border-end align-items-center'>
    
    <Typography variant={'h3'} className={'mb-0 text-center fw-bold'}>
    Worked for 3 State
    </Typography>
    <Typography variant={'p'} className={'text-center text-primary '} color={'primary'} >
    Ranji Trophy Teams
    </Typography>
</Stack>
    </Col>
    <Col md={4} sm={12}>
    <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 border-end align-items-center'>

    <Typography variant={'h3'} className={'mb-0 text-center fw-bold'}>
    Trained over 500
    </Typography>
    <Typography variant={'p'} className={'text-center text-primary'} color={'primary'}>
    Cricketers
    </Typography>
    </Stack>
    </Col>
    <Col md={4} sm={12}>
    <Stack direction={'vertical'} gap={0} className='justify-content-center pt-5 align-items-center'>

    <Typography variant={'h3'} className={'mb-0 text-center fw-bold'}>
    Worked with 20+
    </Typography>
    <Typography variant={'p'} className={'text-center text-primary'} color={'primary'}> 
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
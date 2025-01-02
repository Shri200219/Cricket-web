import React from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import { TiTickOutline } from 'react-icons/ti'
import { SharedButton } from '../components/SharedButton'

const SectionThird = () => {
  return (
    <>
      <div>
        <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
          This free one on one call is for you if:
        </Typography>
        {/* <Container>
        <hr className='mb-4'/>
          <Row className='g-5'>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You believe your kid has cricketing potential.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your kid to perform to his potential &amp; beyond.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You do not want to see your kid wilt under pressure in crunch situations.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your kid to believe in process
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your kid to have bigger self relief.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your kid to have stronger self image.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your kid to give his/her 100% to this dream.
                </Typography>
              </div>
            </Col>
            <Col sm={6} md={4}>
            <div className='element-box'>
                <Typography variant={'p'} className='fs-5'>
                You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>
              </div>
            </Col>
          </Row>
        <hr className='mt-4'/>

        </Container> */}

        <Container>
          <Stack direction='vertical' gap={3}>
        <hr className='mb-4'/>

            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You believe your kid has cricketing potential.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You really want to support him/her in his/her pursuit of this crazy life dream.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to perform to his potential &amp; beyond.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You do not want to see your kid wilt under pressure in crunch situations.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your kid to believe in process
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have bigger self relief.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You believe your kid has cricketing potential.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have stronger self image.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to give his/her 100% to this dream.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography variant={'p'} className='fs-5 mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your aspiring cricketer to build strong foundation to his cricketing career.
              </Typography>
            </div>
        <hr/>
        <SharedButton variant={'primary'} size={'lg'} className={'btn-primary fw-bold p-3 rounded-pill mx-auto'} label={'Book Your One-On-One Call'} />

          </Stack>
          
        </Container>
      </div>

    </>
  )
}

export default SectionThird


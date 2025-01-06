import React, { useState } from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container, Carousel } from 'react-bootstrap'
import { TiTickOutline } from 'react-icons/ti'
import { SharedButton } from '../components/SharedButton'
import { BiSolidCricketBall } from 'react-icons/bi'
import { HiMiniTrophy, HiOutlineSparkles } from 'react-icons/hi2'
import { LuGauge } from 'react-icons/lu'
import { TbChecklist } from 'react-icons/tb'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { FaHeart, FaStarOfDavid } from 'react-icons/fa'
import { GiMirrorMirror } from 'react-icons/gi'

const SectionThird = () => {
  const [active, setActive] = useState(false);
  return (
    <>

      {/* <Container>
         <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
          This free one on one call is for you if:
        </Typography>
          <hr className='mb-4' />
          <Row className='g-5'>
            <Col sm={6} md={3}>

              <Stack direction='vertical' className='align-items-center rounded   activecard'>
              <BiSolidCricketBall color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You believe your kid has cricketing potential.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={3}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <HiOutlineSparkles color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={3}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <HiMiniTrophy  color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to perform to his potential &amp; beyond.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={3}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <LuGauge color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You do not want to see your kid wilt under pressure in crunch situations.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={3}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <FaHeart color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to give his/her 100% to this dream.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={2}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <TbChecklist color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to believe in process
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={2}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <MdOutlineAutoGraph color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to have bigger self relief.
                </Typography>
              </Stack>
            </Col>

            <Col sm={6} md={2}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <GiMirrorMirror color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to have stronger self image.
                </Typography>
              </Stack>
            </Col>

            

            <Col sm={6} md={3}>
              <Stack direction='vertical' className='align-items-center rounded'>
                <FaStarOfDavid color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>
              </Stack>
            </Col>
          </Row>
          <hr className='mt-4' />

        </Container>  */}

      {/* <Container>
         <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
          This free one on one call is for you if:
        </Typography>
          <Stack direction='vertical' gap={3}>
        <hr className='mb-4'/>

            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You believe your kid has cricketing potential.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You really want to support him/her in his/her pursuit of this crazy life dream.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to perform to his potential &amp; beyond.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You do not want to see your kid wilt under pressure in crunch situations.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your kid to believe in process
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have bigger self relief.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You believe your kid has cricketing potential.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have stronger self image.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to give his/her 100% to this dream.
              </Typography>
            </div>
            <div className='shadow rounded p-3 '>
              <Typography className='lh-lg mb-0'>
                <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your aspiring cricketer to build strong foundation to his cricketing career.
              </Typography>
            </div>
        <hr/>
        <SharedButton variant={'primary'} size={'lg'} className={'btn-primary fw-bold p-3 rounded-pill mx-auto'} label={'Book Your One-On-One Call'} />

          </Stack>
          
        </Container>   */}

      {/* <Container>
        <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
          This free one on one call is for you if:
        </Typography>
          <Row>
            <hr/>
            <Col md={6} sm={12}>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You believe your kid has cricketing potential.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to give his/her 100% to this dream.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your kid to believe in process
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have bigger self relief.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to have stronger self image.
                </Typography>
              </div>
            </Col>

            <Col md={6} sm={12}>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} />You want your kid to perform to his potential &amp; beyond.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You do not want to see your kid wilt under pressure in crunch situations.
                </Typography>
              </div>
              <div className='p-3 '>
                <Typography className='lh-lg mb-0'>
                  <TiTickOutline color='#6ED8F0' fontSize={'2rem'} /> You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>
              </div>
            </Col>
            <hr />
          </Row>
          <Stack direction='horizontal' >
            <SharedButton variant={'primary'} size={'lg'} className={'btn-primary fw-bold p-3 rounded-pill mx-auto'} label={'Book Your One-On-One Call'} />
          </Stack>
        </Container> */}

      <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
        This free one on one call is for you if:
      </Typography>

      <Carousel data-bs-theme="dark" className='mb-5' controls={false} interval={5000} pause={false}>

        <Carousel.Item>
          <Container>
            <Row className='g-4'>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
              <BiSolidCricketBall color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You believe your kid has cricketing potential.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <HiOutlineSparkles color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <HiMiniTrophy  color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to perform to his potential &amp; beyond.
                </Typography>
              </Stack>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

          <Carousel.Item>
          <Container>
            <Row className='g-4'>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <LuGauge color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You do not want to see your kid wilt under pressure in crunch situations.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <FaHeart color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to give his/her 100% to this dream.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <TbChecklist color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to believe in process
                </Typography>
              </Stack>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container>
            <Row className='g-4'>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <MdOutlineAutoGraph color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to have bigger self relief.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical'className='align-items-center justify-content-center h-100 px-5'>
                <GiMirrorMirror color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your kid to have stronger self image.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical'className='align-items-center justify-content-center h-100 px-5'>
                <FaStarOfDavid color='#6ED8F0' fontSize={'2rem'} className='text-center' />
                <Typography className='lh-lg mb-0 text-center'>
                  You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>
              </Stack>
              </Col>
            </Row>
          </Container>
        </Carousel.Item> 

      </Carousel>
    </>
  )
}

export default SectionThird


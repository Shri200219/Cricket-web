import React, { useState } from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container, Carousel } from 'react-bootstrap'
import { TiTickOutline } from 'react-icons/ti'
import { SharedButton } from '../components/SharedButton'
import { BiCricketBall, BiSolidCricketBall } from 'react-icons/bi'
import { HiMiniTrophy, HiOutlineSparkles, HiOutlineTrophy } from 'react-icons/hi2'
import { LuGauge } from 'react-icons/lu'
import { TbChecklist } from 'react-icons/tb'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { FaHeart, FaRegHeart, FaStarOfDavid } from 'react-icons/fa'
import { GiMirrorMirror } from 'react-icons/gi'
import { BallIcon } from '../components/icons/BallIcon'
import { StarIcon } from '../components/icons/StarIcon'
import { TrophyIcon } from '../components/icons/TrophyIcon'
import { PressureICon } from '../components/icons/PressureIcon'
import { HeartIcon } from '../components/icons/HeartIcon'
import { GrowthIcon } from '../components/icons/GrowthIcon'
import { CheckedIcon } from '../components/icons/CheckedIcon'
import { MirrorIcon } from '../components/icons/MirrorIcon'
import { RunningIcon } from '../components/icons/RunningIcon'
import { useNavigate } from 'react-router'


const SectionThird = () => {
  const navigate = useNavigate();
  const handleNavigateToContactUs = () => {
    navigate('/contact-us');
  };
  const [active, setActive] = useState(false);
  return (
    <>
      <div className='py-5' data-aos="fade-up">
      <Stack direction='vertical' gap={3}>
      <Typography variant={'h2'} className={'fw-bold fs-1 text-center text-dark'}>
        This one on one call is for you if:
      </Typography>

      <Carousel data-bs-theme="dark" className='mb-5' controls={false} interval={8000} pause={true}>

        <Carousel.Item>
          <Container>
            <Row className='g-4'>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                 <BallIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
                  You believe your kid has cricketing potential.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <StarIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
                  You really want to support him/her in his/her pursuit of this crazy life dream.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <TrophyIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
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
                <PressureICon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
                  You do not want to see your kid will under pressure in crunch situations.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <HeartIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
                  You want your kid to give his/her 100% to this dream.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical' className='align-items-center justify-content-center h-100 px-5'>
                <CheckedIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
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
                <GrowthIcon/>
                <Typography className=' text-dark fw-bold lh-lg mb-0 text-center'>
                  You want your kid to have bigger self relief.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical'className='align-items-center justify-content-center h-100 px-5'>
                <MirrorIcon/>
                <Typography className=' text-dark fw-bold lh-lg mb-0 text-center'>
                  You want your kid to have stronger self image.
                </Typography>
              </Stack>
              </Col>
              <Col md={4} sm={12}>
              <Stack direction='vertical'className='align-items-center justify-content-center h-100 px-5'>
                <RunningIcon/>
                <Typography className='lh-lg mb-0 text-center text-dark fw-bold'>
                  You want your aspiring cricketer to build strong foundation to his cricketing career.
                </Typography>
              </Stack>
              </Col>
            </Row>
          </Container>
        </Carousel.Item> 

      </Carousel>

      
      <Stack direction='horizontal' className='justify-content-center'>
      <SharedButton 
      size="lg"
      className="fw-bold rounded-pill glow-on-hover"
      label="Book Your One-On-One Call for  ₹ 499"
      onClick={handleNavigateToContactUs}
      />
      </Stack>

      </Stack>
      </div>

    </>
  )
}

export default SectionThird


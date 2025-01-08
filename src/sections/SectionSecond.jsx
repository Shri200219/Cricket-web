import React, { useEffect } from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container, Image } from 'react-bootstrap'
import { GiBrain, GiBrokenHeart, GiCricketBat } from 'react-icons/gi'
import { FaHandsHelping } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrokenHeartIcon } from '../components/icons/BrokenHeartIcon'
import { CricketIcon } from '../components/icons/CricketIcon'
import { BrainIcon } from '../components/icons/BrainIcon'
import { HandsIcon } from '../components/icons/HandsIcon'
import { MessageIcon } from '../components/icons/MessageIcon'


const SectionSecond = () => {

    useEffect(()=>{ 
        AOS.init({duration:2000})
   });
    return (
        <>
            <div className='bg-gradient--pale-ocean py-5'>
                {/* <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Typography variant={'h2'} className={'fw-bold fs-1'}>
                                In this one on one call you will be able to understand
                            </Typography>
                            <Stack direction="vertical" gap={2} className='mt-4'>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><GiCricketBat size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Factors That Drive a Young Cricketer’s Performance</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'> <GiBrain size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'> Mental Toughness: The Key to Thriving in Cricket</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3' > <GiBrokenHeart size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Why Aspiring Cricketers Struggle to Reach Their Potential</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><FaHandsHelping size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'>Your Role as a Parent in Their Cricketing Journey</Typography>
                                </Stack>

                                <Stack direction='horizontal' gap={3}>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><AiOutlineMessage size={'2rem'} /></div>
                                <Typography variant={'p'} className='fs-5'> The Do’s and Don’ts of Parent-Child Communication</Typography>
                                </Stack>

                            </Stack>
                        </Col>
                        <Col sm={12} md={6}>
                        <Stack direction='vertical' className='justify-content-center h-100 '>
                        <Image src='https://img.freepik.com/free-photo/tennis-ball-tennis-court_155003-8211.jpg?t=st=1735888819~exp=1735892419~hmac=4213c35f571fdde12bc6d8cbd66975f893f826e0957a1d16c9e4efb971519382&w=740'/>
                        </Stack>
                        </Col>
                    </Row>
                </Container> */}
 <Typography variant={'h2'} className={'fw-bold fs-1 text-center mb-3'}>
                                In this one on one call you will be able to understand
                            </Typography>
                <Container data-aos="fade-left">
                           <Row className='g-4'>
                           <Col lg={3} md={6} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                 <BrokenHeartIcon/>
                                <Typography variant={'p'} className='lh-base mb-0'>Why Aspiring Cricketers Struggle to Reach Their Potential</Typography>
                                </Stack>
                            </Col>
                            <Col lg={2} md={6} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border text-center p-4 rounded h-100'}>
                                <CricketIcon/>
                                <Typography variant={'p'} className='lh-base mb-0'>Factors That Drive a Young Cricketer’s Performance</Typography>
                                </Stack>
                            </Col>
                            <Col lg={2} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                 <BrainIcon/>
                                <Typography variant={'p'} className='lh-base mb-0'>Mental Toughness: Drives Cricket Success</Typography>
                                </Stack>
                            </Col>
                           
                            <Col lg={2} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                 <HandsIcon/>
                                <Typography variant={'p'} className='lh-base mb-0'>Your Role as a Parent in Their Cricketing Journey</Typography>
                                </Stack>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                 <MessageIcon/> 
                                <Typography variant={'p'} className='lh-base mb-0'> The Do’s and Don’ts of Parent-Child Communication</Typography>
                                </Stack>
                            </Col>
                           </Row>
                </Container>
            </div>
        </>
    )
}

export default SectionSecond
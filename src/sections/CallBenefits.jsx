import React, { useEffect, useState } from 'react'
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
import { SharedButton } from '../components/SharedButton'
import { useNavigate } from 'react-router'
import { ContactModal } from '../components/ContactModal'

const CallBenefits = () => {
    const navigate = useNavigate();
     const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    const handleNavigateToContactUs = () => {
      navigate('/contact-us');
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 0,
            once: true,
        })
    });
    return (
        <>
            <div className='bg-black py-5'>
                <Typography variant={'h2'} className={'fw-bold fs-1 text-center mb-3'}>
                    In this one on one call you will understand
                </Typography>

                <Container  data-aos="flip-left">
                    <Row className='g-4'>
                        <Col lg={3} md={6} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                <BrokenHeartIcon />
                                <Typography variant={'p'} className='lh-base mb-0'>Why Aspiring Cricketers Struggle to Reach Their Potential</Typography>
                            </Stack>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border text-center p-4 rounded h-100'}>
                                <CricketIcon />
                                <Typography variant={'p'} className='lh-base mb-0'>Factors That Drive a Young Cricketer’s Performance</Typography>
                            </Stack>
                        </Col>
                        <Col lg={2} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                <BrainIcon />
                                <Typography variant={'p'} className='lh-base mb-0'>Mental Toughness: Drives Cricket Success</Typography>
                            </Stack>
                        </Col>

                        <Col lg={2} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                <HandsIcon />
                                <Typography variant={'p'} className='lh-base mb-0'>Your Role as a Parent in Their Cricketing Journey</Typography>
                            </Stack>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <Stack direction='vertical' gap={3} className={'justify-content-center align-items-center border  text-center p-4 rounded h-100'}>
                                <MessageIcon />
                                <Typography variant={'p'} className='lh-base mb-0'> The Dos and Don’ts of Parent-Child Communication</Typography>
                            </Stack>
                        </Col>
                    </Row>
                </Container>

                
                    
    <Stack direction='horizontal' className='justify-content-center mt-4'>
      <SharedButton 
      className="fw-bold rounded-pill btn-md-lg glow-on-hover"
      label="Book Your One-On-One Call for free"
      onClick={handleShow}
      />
       <ContactModal show={show} onHide={handleClose} />
      </Stack>
                         
            </div>
        </>
    )
}

export default CallBenefits
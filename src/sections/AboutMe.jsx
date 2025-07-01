import React, { useState } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import Typography from '../components/Typography'
import { SharedButton } from '../components/SharedButton'
import { useNavigate } from 'react-router'
import { ContactModal } from '../components/ContactModal'

const AbourMe = () => {
    const navigate = useNavigate();
     const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    const handleNavigateToContactUs = () => {
      navigate('/contact-us');
    };
    return (
        <>
            <div className='bg-black py-5'>
                <Container data-aos="fade-up">
                    <Row className='g-4'>
                        <Col sm={12} md={6}>
                            <Typography variant={'h2'} className={'fw-bold fs-1 mb-4 text-center'}>
                                About the Coach
                            </Typography>
                            <Typography className='lh-lg mb-0'>
                                My name is Amber Arondekar, a seasoned trainer with over 29 years of
                                extensive experience delivering impactful training across industries
                                and countries. I have had the privilege of working with three Ranji
                                Trophy Champion teams and collaborating with esteemed state cricket
                                boards, including the Vidarbha Cricket Association, Madhya Pradesh
                                Cricket Association, and Chhattisgarh State Cricket Sangh. Many of
                                the players I have mentored are now part of various IPL teams, with
                                a few representing India at the highest level in ODIs, T20s, and
                                Test cricket.

                            </Typography>
                            <hr className='w-25' />
                            
                               <Stack direction='horizontal' className='justify-content-center mt-4'>
                                    <SharedButton                                       
                                       className="fw-bold rounded-pill btn-md-lg glow-on-hover"
                                       label="Book Your One-On-One Call for free"
                                       onClick={handleShow}
                                       />
                                        <ContactModal show={show} onHide={handleClose} />
                                  </Stack>
                        </Col>
                        <Col
                            sm={12}
                            md={6}>
                            <Stack direction='vertical' className='align-items-center justify-content-center h-100 '>
                                <img
                                    src="images/profile.png"
                                    alt="Amber Arondekar"
                                    className='img-fluid'
                                    width={450}
                                />
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AbourMe
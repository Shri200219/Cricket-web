import React from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import Typography from '../components/Typography'


const AbourMe = () => {
    return (
        <>
            <div className='bg-gradient--pale-ocean py-5'>
                <Container>
                    <Row >
                        <Col sm={12} md={6}>
                            <Typography variant={'h2'} className={'fw-bold fs-1 text-center'}>
                                     Let Me Introduce
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
                                <hr className='w-25'/>
                        </Col>
                        <Col
                            sm={12}
                            md={6}>
                            <Stack direction='vertical' className='justify-content-center h-100 '>
                            <img
                                src="./AboutMe-2.png"
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
import React from 'react'
import Typography from '../components/Typography'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import { GiBrain, GiBrokenHeart, GiCricketBat } from 'react-icons/gi'
import { FaHandsHelping } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'

const SectionSecond = () => {
    return (
        <>
            <div className='bg-gradient--pale-ocean py-5'>
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Typography variant={'h2'} className={'fw-bold fs-1'}>
                                In this one on one call you will be able to understand
                            </Typography>
                            <Stack direction="vertical" gap={0} className='justify-content-start align-items-start '>
                                <div className='bg-primary rounded-circle text-white d-inline p-3'><GiCricketBat size={'2rem'} /></div>

                                <Typography variant={'p'} className='fs-4'>
                                    Factors That Drive a Young Cricketer’s Performance
                                </Typography>
                                <Typography variant={'p'} className='fs-4'>
                                    <div className='bg-primary rounded-circle text-white d-inline p-3'> <GiBrain size={'2rem'} /></div> Mental Toughness: The Key to Thriving in Cricket
                                </Typography>
                                <Typography variant={'p'} className='fs-4'>
                                    <div className='bg-primary rounded-circle text-white d-inline p-3' >
                                        <GiBrokenHeart size={'2rem'} />
                                    </div>
                                    Why Aspiring Cricketers Struggle to Reach Their Potential
                                </Typography>
                                <Typography variant={'p'} className='fs-4'>
                                    <div className='bg-primary rounded-circle text-white d-inline p-3'><FaHandsHelping size={'2rem'} /></div>
                                    Your Role as a Parent in Their Cricketing Journey
                                </Typography>
                                <Typography variant={'p'} className='fs-4'>
                                    <div className='bg-primary rounded-circle text-white d-inline p-3'>
                                        <AiOutlineMessage size={'2rem'} />
                                    </div>
                                    The Do’s and Don’ts of Parent-Child Communication
                                </Typography>
                            </Stack>
                        </Col>
                        <Col sm={12} md={6}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SectionSecond